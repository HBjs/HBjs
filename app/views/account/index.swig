<!doctype html>
<html lang="en" ng-app="admin">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>


    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&subset=cyrillic" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="/themes/admin/src/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/themes/admin/src/angular-toastr/dist/angular-toastr.min.css">
    <link rel="stylesheet" type="text/css" href="/themes/admin/src/Ionicons/css/ionicons.min.css">
    <link rel="stylesheet" type="text/css" href="/themes/admin/assets/css/style.css">

    <title ng-bind="title"></title>
</head>
<body>

<header>
    <a href="/account" class="logo"><span>HB.js</span></a>
    <nav class="navbar navbar-fixed-top">
        <a href="#" class="navbar-btn sidebar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>

        <ul class="breadcrumb" ng-bind-html="HeaderTitle"></ul>
    </nav>
</header>

<aside class="sidebar">
    <div class="nav-profile">
        <div class="thumb">
            <img src="http://maniac.yakuzi.eu/assets/img/avatar.jpg" class="img-circle" alt="">
        </div>
        <div class="info">
            <a href="#">John Doe</a>
        </div>
    </div>

    <div class="divider"></div>

    <ul class="nav-sidebar">
        <li class="active">
            <a href="/account">
                <i class="ion-edit"></i> <span class="sidebar-title">Stories</span>
            </a>
        </li>
        <li>
            <a href="/account/comments">
                <i class="ion-chatbox-working"></i> <span class="sidebar-title">Comments</span>
            </a>
        </li>
        <li>
            <a href="/account/bookmarks">
                <i class="ion-pricetags"></i> <span class="sidebar-title">Bookmarks</span>
            </a>
        </li>
        <li>
            <a href="/account/favorites">
                <i class="ion-thumbsup"></i> <span class="sidebar-title">Favorites</span>
            </a>
        </li>
        <li>
            <a href="/account/settings">
                <i class="ion-gear-b"></i> <span class="sidebar-title">Settings</span>
            </a>
        </li>
    </ul>

    <div class="divider"></div>

    <ul class="nav-sidebar">

        {% if user.role == 3 %}
        <li>
            <a href="/users">
                <i class="ion-person-stalker"></i> <span class="sidebar-title">Users</span>
            </a>
        </li>
        <li>
            <a href="/tags">
                <i class="ion-pin"></i> <span class="sidebar-title">Tags</span>
            </a>
        </li>
        <li>
            <a href="/tags">
                <i class="ion-settings"></i> <span class="sidebar-title">System setting</span>
            </a>
        </li>

        {% endif %}

        <li>
            <a href="/logout">
                <i class="ion-log-out"></i> <span class="sidebar-title">Logout</span>
            </a>
        </li>
    </ul>
</aside>

<div class="general">
    <div class="container-fluid" ng-view></div>
</div>



    <script src="/themes/admin/src/jquery/dist/jquery.min.js"></script>
    <script src="/themes/admin/src/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="/themes/admin/src/angular/angular.min.js"></script>
    <script src="/themes/admin/src/angular-resource/angular-resource.min.js"></script>
    <script src="/themes/admin/src/angular-route/angular-route.min.js"></script>
    <script src="/themes/admin/src/angular-animate/angular-animate.min.js"></script>
    <script src="/themes/admin/src/angular-toastr/dist/angular-toastr.min.js"></script>
    <script src="/themes/admin/src/marked/marked.min.js"></script>
    <script src="/themes/admin/src/angular-marked/dist/angular-marked.min.js"></script>

    <script src="/themes/admin/app/app.js"></script>
    <script src="/themes/admin/app/app.factory.js"></script>
    <script src="/themes/admin/app/components/stories/stories.controller.js"></script>
    <script src="/themes/admin/app/components/stories/story-create.controller.js"></script>

    <script src="/themes/admin/assets/js/scripts.js"></script>
</body>
</html>