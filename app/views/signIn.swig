{%
    set settings_page = {
        'title' : _('Signin'),
        'description' : '',
        'keywords' : '',
        'og_title' : '',
        'og_description' : ''
    }
%}

{% extends 'common/layout.swig' %}

{% block body %}
<div class="login-block">

    {% if flash !='' %}
        <div class="error-block">{{  flash }}</div>
    {% endif %}

    <form class="form-horizontal" method="post" action="/signin">
        <div class="form-group">
            <input type="text" class="form-control form-field" id="email_field" name="email" required=""/>
            <label for="email_field" class="control-label">{{ _('Email') }}</label>
        </div>
        <div class="form-group">
            <input type="password" class="form-control form-field" id="password_field" name="password" required=""/>
            <label for="password_field" class="control-label">{{ _('Password') }}</label>
        </div>

        <div class="form-group">
            <input type="submit" class="form-control form-btn" value="{{ _('Sign In') }}"/>
        </div>

        <div class="form-group form-links">
            <a href="/login">{{ _('Already a Member? Login Here') }}</a>
        </div>
    </form>

    <div class="divider">
        <div>{{ _('OR') }}</div>
    </div>

    <div class="social-buttons">
        <a class="btn btn-block social-btn social-btn-fb" href="/auth/facebook">
            <div>
                <i class="ion-social-facebook-outline"></i>
            </div>
            <span>{{ _('Continue with') }} Facebook</span>
        </a>

        <a class="btn btn-block social-btn social-btn-tw" href="/auth/twitter">
            <div>
                <i class="ion-social-twitter-outline"></i>
            </div>
            <span>{{ _('Continue with') }} Twitter</span>
        </a>

        <a class="btn btn-block social-btn social-btn-gl" href="/auth/google">
            <div>
                <i class="ion-social-google-outline"></i>
            </div>
            <span>{{ _('Continue with') }} Google</span>
        </a>
    </div>

</div>

{% endblock %}