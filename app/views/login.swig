{% extends 'common/layout.swig' %}

{% block title %} Login page - Blog {% endblock %}

{% block body %}
<div class="login-block">

    {{  flash }}

    <form class="form-horizontal" method="post" action="/login">
        <div class="form-group">
            <input type="text" class="form-control form-field" id="email_field" name="email"/>
            <label for="email_field" class="control-label">Email</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control form-field" id="password_field" name="password"/>
            <label for="password_field" class="control-label">Password</label>
        </div>

        <div class="form-group">
            <input type="submit" class="form-control form-btn" value="Log In"/>
        </div>

        <div class="form-group form-links">
            <a href="/signin">Do not have an account yet? </a>
            <a href="" class="pull-right">Forgot your password?</a>
        </div>
    </form>

    <div class="divider">
        <div>OR</div>
    </div>

    <div class="social-buttons">
        <a class="btn btn-block social-btn social-btn-fb" href="/auth/facebook">
            <i class="ion-social-facebook"></i>
            <span>Continue with Facebook</span>
        </a>

        <a class="btn btn-block social-btn social-btn-tw" href="/auth/twitter">
            <i class="ion-social-twitter"></i>
            <span>Continue with Twitter</span>
        </a>

        <a class="btn btn-block social-btn social-btn-gl" href="/auth/google">
            <i class="ion-social-google"></i>
            <span>Continue with Google</span>
        </a>
    </div>

</div>

{% endblock %}