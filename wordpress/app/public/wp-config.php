<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2yhrB6/ghLjufxIOjwuj2J6ZfmQjh13H4ImLDt0nyZJaQwTbYeYxLN7/cgtC3E7Aw1cB0Yto1reC2NtNMaOuKQ==');
define('SECURE_AUTH_KEY',  '2AHQEyJVDinBe3QPq5DAKTeVhdTTwKNyywzX/cOZnJVvwZHR7LAESm/QY3tD10E0Mp7LmHKjKe9CeZ/hnypzfg==');
define('LOGGED_IN_KEY',    '04Hn4v6h4LM2PB/tYvNdtFB/8tfrT2A0+6u++39XYT23nM/kEBb3eS9YIXvHI3RklwX60pD3gIrgJSgOPLkWDA==');
define('NONCE_KEY',        'prXKMZQ15mdfbiiRZv6RYHAFdolGLyhb0CtBhWYuLPLK9w0yQCusdIJx/QP9Yt60H5Snx5M2smHQqDrL2eonhQ==');
define('AUTH_SALT',        'l1486fzgZU3g7FTugCTwVUcgTwLsVhVpV2Ny4M0FbKuiYO0T0eoYn2HyDFDhJTXzvde5oDdRU4bUhEbFqyPacw==');
define('SECURE_AUTH_SALT', 'uHilMfZcRICegyW+/oidCKUpWFAxkO031Y1zy400wZt5/aanT2tlpzwtK5lHhy49ro95DzhHhkLEWENWkWsjuw==');
define('LOGGED_IN_SALT',   'yGvwvpIY6kuQwvFjoXZYIP7hyrmrcs4jGP8H5qDjPHlfNZygVtVDPMUSsRcvAfdNO5aF0oxRN4xfNeQspGB0kg==');
define('NONCE_SALT',       'L4ZcfvjaW5DVEZmyx5ej+wBaWqSMABzLv/6kJjUnyY2SlpWaMSWk3LWCLTrokSeFKIW+nObdIzde864JRHZUoQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
