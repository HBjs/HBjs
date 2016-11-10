<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index,follow" />

    <title>{{ settings_page.title }}</title>

    <meta name="description" content="{{ settings_page.description }}" />
    <meta name="keywords" content="{{ settings_page.keywords }}" />

    <meta property="og:title" content="{{ settings_page.og_title }}"/>
    <meta property="og:description" content="{{ settings_page.og_description }}"/>
    <meta property="og:type" content="website"/>

    {#<link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon">
    <link rel="icon" href="/assets/img/favicon.png" type="image/x-icon">#}

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&subset=cyrillic" rel="stylesheet">


    <link href="/themes/materialize/src/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/themes/materialize/src/Ionicons/css/ionicons.min.css" rel="stylesheet">

    <link rel="stylesheet" href="/themes/materialize/assets/css/style.css"/>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>


<div class="page-wrapper">
    <nav class="navbar navbar-material navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">HB.js</a>
            </div>

            <div class="collapse navbar-collapse" id="main-navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="#">{{  _('Categories') }} </a></li>
                    <li><a href="#">{{  _('Tags') }}</a></li>
                    <li><a href="#">{{  _('Write') }}</a></li>
                </ul>


                <ul class="nav navbar-nav navbar-right">
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="{{  _('Search') }}">
                        </div>
                    </form>

                    {% if !isAuth %}
                        <li><a href="/login">{{  _('Login') }}</a></li>
                        {% else %}
                        <li><a href="/account">{{  _('Account') }}</a></li>
                        <li><a href="/logout">{{  _('Logout') }}</a></li>
                    {% endif %}
                </ul>
            </div>
        </div>
    </nav>

    <div class="container general-container">
        {% block body %}{% endblock %}
    </div>


    <footer class="col-md-12">
        <div class="container">
            <div class="col-md-12 link-block">
                <div class="col-md-2">
                    <a href="">Login</a>
                </div>
                <div class="col-md-2">
                    <a href="">Newest articles</a>
                </div>
                <div class="col-md-2">
                    <a href="">Most popular</a>
                </div>
                <div class="col-md-2">
                    <a href="">How to write</a>
                </div>
                <div class="col-md-2">
                    <a href="">Sitemap</a>
                </div>
                <div class="col-md-2">
                    <a href="">About us</a>
                </div>
            </div>
            <div class="col-md-12 copyright">
                2016 © HB.js Team. All rights reserved
            </div>
        </div>
    </footer>
</div>


<script src="/themes/materialize/src/jquery/dist/jquery.min.js"></script>
<script src="/themes/materialize/src/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="/themes/materialize/assets/js/app.js"></script>

<script>
    jQuery().ready(function(){

    });
</script>

</body>
</html>