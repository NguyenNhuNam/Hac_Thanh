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
						Hotline: 0812.111.136 - 0813.111.136
					</p>
				</div>
			</div>

			<!-- Menu -->
			<div class="footer-menu footer-hl">
				<h4>Mục lục</h4>

				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Về chúng tôi</a></li>
					<li><a href="#">Dịch vụ</a></li>
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
