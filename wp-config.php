<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hacthanh_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '12345678@Abc' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '6U[!|4/UjP5!%dow]GTY4ST/gcV`^GMRkz@38#qf<(Ce)RdK B06dGR&H6Jr^A+w' );
define( 'SECURE_AUTH_KEY',   'Wv>NZecq_bQi3F_nvOGo~K)ts&dHFr?$H3!n|q{5{,@9*]<V0GrOr}O))I{fi&/F' );
define( 'LOGGED_IN_KEY',     ';,=D=J)s.GeSJ4dYFbRFv=x|PvIRqoAjr#^gL1q%|1vv_yJG?k-C)}INvx PL=Bp' );
define( 'NONCE_KEY',         '~9o[6Bu!x3:)>=2`)Yk=y}@DL/C^6U_7BlN=RzQFWEQu s:QrKcl$IW=$U.qdZ7N' );
define( 'AUTH_SALT',         '@Tso;fj=|nXY= *0OvFG~2SQ]>;HssHmtG|Al@`C6xs%0R7LZ`:dUE]RMtay*{LO' );
define( 'SECURE_AUTH_SALT',  'd(53$n|B.--8Gc4IeP{b_G^U-Z1Fq(d2!UMz_:(GdRO(QvbV>4=s..:WQj(seB@R' );
define( 'LOGGED_IN_SALT',    '}^Sxx#DyEkeM4hJ/6F2/RSU<{~o./y:d;oH{2*dZRn~~,_FF},ofc|b5{VS<%MkW' );
define( 'NONCE_SALT',        ',yV!(rA)gc<SmiSEr8ts]|*QlQzL,+M|%+)FC,1&A8`p$>WyyPS6pg|R!w{ew]Tm' );
define( 'WP_CACHE_KEY_SALT', 'x9feRPCO*s[GtNum}?qZhpwIE<z-+_M~t^P3G+ijG/F{eqbI:Qz(Ri&1@rhiL`(h' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
