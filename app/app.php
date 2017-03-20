<?php
    date_default_timezone_set('America/Los_Angeles');
    require_once __DIR__.'/../vendor/autoload.php';
    // CHANGE TO BE A PRODUCT OBJECT WITH PHP require_once __DIR__.'/../src/Contact.php';

    // session_start();
    // if (empty($_SESSION['list_of_contacts'])){
    //     $_SESSION['list_of_contacts'] = array();
    // }
    $app = new Silex\Application();
    $app->register(new Silex\Provider\TwigServiceProvider(), array('twig.path' => __DIR__.'/../views'));

    $app->get("/", function() use ($app) {
        return $app['twig']->render('home.html.twig');
    });

    $app->get("/shop", function() use ($app) {
        return $app['twig']->render('shop.html.twig');
    });

    $app->get("/product-multi", function() use ($app) {
        return $app['twig']->render('product-multi.html.twig');
    });

    $app->get("/checkout", function() use ($app) {
        return $app['twig']->render('checkout.html.twig');
    });


    return $app;
?>
