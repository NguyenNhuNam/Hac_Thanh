<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<?php astra_content_bottom(); ?>
	</div> <!-- ast-container -->
	</div><!-- #content -->
<?php
	astra_content_after();

	astra_footer_before();

	astra_footer();

	astra_footer_after();
?>
	</div><!-- #page -->
<?php
	astra_body_bottom();
	wp_footer();
?>

<section class="register-section">
	<div class="register-container">
		<div class="register-card" data-aos="zoom-in">
			<div class="register-header">
				<h2>LIÊN HỆ</h2>
				<p>Nhận tư vấn ngay cho sự kiện sắp tới của bạn!</p>
			</div>

			<form class="register-form">

				<?php wp_nonce_field('register_form_action', 'register_form_nonce'); ?>
				<input type="hidden" name="action" value="handle_register_form">

				<div class="form-group">
					<label>Họ và tên</label>
					<input type="text" name="user_fullname" placeholder="Value" required />
				</div>

				<div class="form-group">
					<label>Số điện thoại</label>
					<input type="text" name="user_phone" placeholder="Value" required />
				</div>

				<div class="form-group checkbox-group">
					<label>Dịch vụ tiệc</label>
					<div class="checkbox-list">
						<label>
							<input type="checkbox" name="services[]" value="Tiệc cưới" checked />
							Tiệc cưới
						</label>
						<label>
							<input type="checkbox" name="services[]" value="Tiệc doanh nghiệp" />
							Tiệc doanh nghiệp
						</label>
						<label>
							<input type="checkbox" name="services[]" value="Tiệc đầy năm" />
							Tiệc đầy năm
						</label>
						<label>
							<input type="checkbox" name="services[]" value="Tiệc khác" />
							Tiệc khác
						</label>
					</div>
				</div>

				<button type="submit" class="btn-submit">Gửi</button>
			</form>

		</div>

		<div class="register-vertical-text">
			<span>HẠC THÀNH</span>
			<span>CENTER</span>
		</div>

		<a href="tel:0813111136" class="phone-button">
			<img src="/assets/images/footer/ic-hotline.png" alt="hotline">
		</a>
	</div>
</section>

<footer class="footer">
    <div class="footer-container">
		<div class="footer-title">TRUNG TÂM TỔ CHỨC SỰ KIỆN & TIỆC CƯỚI HẠC THÀNH CENTER</div>
        <div class="footer-wrap">
			<!-- Thông tin -->
			<div class="footer-info footer-hl">
				<div class="footer-block">
					<h4>Liên hệ</h4>

					<p>marketing@hacthanh.com</p>
					<p>Địa chỉ: Số 35 Đinh Hương, P. Hàm Rồng, Tỉnh Thanh Hóa</p>
					<p class="hotline">
						Hotline: 0813.111.136
					</p>
				</div>
			</div>

			<!-- Menu -->
			<div class="footer-menu footer-hl">
				<h4>Mục lục</h4>

				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="#">Về chúng tôi</a></li>
					<li><a href="/dich-vu/">Dịch vụ</a></li>
					<li><a href="#">Ưu đãi</a></li>
					<li><a href="#">Liên hệ</a></li>
				</ul>
			</div>

			<!-- Social -->
			<div class="footer-social footer-hl">
				<h4>Contact</h4>

				<div class="social-list">
					<a href="#">
						<img src="/assets/images/footer/ic-fb.png" alt="">
					</a>

					<a href="#">
						<img src="/assets/images/footer/ic-gg.png" alt="">
					</a>

					<a href="#">
						<img src="/assets/images/footer/ic-tiktok.png" alt="">
					</a>

					<a href="#">
						<img src="/assets/images/footer/ic-phone.png" alt="">
					</a>
				</div>
			</div>

			<!-- Logo -->
			<div class="footer-logo">
				<img src="/assets/images/footer/logo-ht-footer.png" alt="Hạc Thành Center">
			</div>
		</div>

    </div>
</footer>

	</body>
</html>
