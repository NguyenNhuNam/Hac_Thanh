<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

// Đăng ký AJAX handler
add_action('wp_ajax_handle_register_form', 'process_register_form');
add_action('wp_ajax_nopriv_handle_register_form', 'process_register_form');

function process_register_form() {
    // 1. Kiểm tra Nonce
    if (!isset( $_POST['register_form_nonce']) ||
        !wp_verify_nonce( $_POST['register_form_nonce'], 'register_form_action')) {
        wp_send_json_error('Lỗi bảo mật!');
    }

    // 2. Lấy & làm sạch dữ liệu
    $fullname = sanitize_text_field( $_POST['user_fullname']);
    $phone    = sanitize_text_field( $_POST['user_phone']);

    $services     = isset( $_POST['services']) ? (array) $_POST['services'] : [];
    $services     = array_map('sanitize_text_field', $services);
    $services_str = !empty( $services) ? implode(', ', $services) : 'Không chọn';

    // 3. Nội dung email
    $to      = get_option('admin_email');
    $subject = '📩 Đăng ký dịch vụ tiệc từ: ' . $fullname;
    $body    = "Thông tin đăng ký mới:\n\n" .
               "Họ và tên    : $fullname\n" .
               "Số điện thoại: $phone\n" .
               "Dịch vụ chọn : $services_str\n\n" .
               "--- Gửi từ website ---";

    $headers = ['Content-Type: text/plain; charset=UTF-8'];

    // 4. Gửi mail
    $sent = wp_mail( $to, $subject, $body, $headers);

    // 5. Trả kết quả về JS
    if ( $sent) {
        wp_send_json_success('Email đã được gửi!');
    } else {
        wp_send_json_error('Gửi mail thất bại, vui lòng thử lại.');
    }
}

// Truyền ajaxUrl vào JS
add_action('wp_enqueue_scripts', function () {
    wp_localize_script('your-script-handle', 'wpAjaxData', [
        'ajaxUrl' => admin_url('admin-ajax.php')
    ]);
});
