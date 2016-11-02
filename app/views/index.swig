{% extends 'common/layout.swig' %}

{% block title %} Index page - Blog {% endblock %}

{% block body %}
    <div class="col-md-8">
        <div class="article-block">
            <div class="article">
                <div>
                    <div class="author-block">
                        <a href="">
                            <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*zTWx76OcQW4gK-2Q4Hz1kg.png" alt="" class="avatar"/>
                        </a>
                        <div class="author-data">
                            <a href="">John Doe</a>
                            <div class="post-date">
                                30.08.2016
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article-content">
                    <div class="title">What I learned from analysing 1.65M versions of Node.js modules in NPM</div>
                    <div class="description">
                        NPM and open source modules are one of Node.js’ greatest strengths — and also one of it’s greatest weaknesses. took it upon myself to explore how the NPM really works on a granular level and at scale. It turned out there was a lot to discover. The following blog post is a long one, but hang in there, it will be worth it. Grab a cup of coffee and enjoy the deep dive into the NPM ecosystem.
                    </div>
                </div>

                <div class="read-more">
                    <a href="">Read more...</a>
                </div>

                <div class="footer">
                    <div class="likes">
                        <i class="ion-heart" title="Rating"></i>
                        <span>89</span>
                    </div>
                    <div class="count-views">
                        <i class="ion-eye" title="Viewed"></i>
                        <span>5966</span>
                    </div>
                </div>
            </div>

            <div class="article">
                <div>
                    <div class="author-block">
                        <a href="">
                            <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*dl1vUVg2QOtEJ7nW80tVPQ.jpeg" alt="" class="avatar"/>
                        </a>
                        <div class="author-data">
                            <a href="">Андрей Степанов</a>
                            <div class="post-date">
                                30.08.2016
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article-content">
                    <div class="title">В чем секрет скорости NodeJS?</div>
                    <div class="description">
                        Предлагаем вам перевод статьи Евгения Обрезкова, в которой он кратко и по делу рассказывает о причинах высокой скорости NodeJS: потоки, event loop, оптимизирующий компилятор и, конечно же, сравнение с PHP. Куда уж без него.
                    </div>
                </div>

                <div class="read-more">
                    <a href="">Читать дальше...</a>
                </div>

                <div class="footer">
                    <div class="likes">
                        <i class="ion-heart" title="Rating"></i>
                        <span>97</span>
                    </div>
                    <div class="count-views">
                        <i class="ion-eye" title="Viewed"></i>
                        <span>7895</span>
                    </div>
                </div>
            </div>

            <div class="article">
                <div>
                    <div class="author-block">
                        <a href="">
                            <img src="https://cdn-images-1.medium.com/fit/c/36/36/0*EKNQfT8lHMeQ1v_-.jpeg" alt="" class="avatar"/>
                        </a>
                        <div class="author-data">
                            <a href="">Lizzy</a>
                            <div class="post-date">
                                30.08.2016
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article-content">
                    <div class="title">Why I’ll Never Date a Feminist (it is not because I am alien)</div>
                    <div class="description">
                        It is with great pleasure that I use my human hands and eyes and brain to express to you why I’ll never date a feminist. I am a person and I understand person women and I get that they have it tough sometimes. Other humans…
                    </div>
                </div>

                <div class="read-more">
                    <a href="">Read more...</a>
                </div>

                <div class="footer">
                    <div class="likes">
                        <i class="ion-heart" title="Rating"></i>
                        <span>23</span>
                    </div>
                    <div class="count-views">
                        <i class="ion-eye" title="Viewed"></i>
                        <span>100</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="right-side">
            <div class="title-name">
                Most viewed
            </div>
            <div class="items">
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9pG1gSOmgPNrLxuglK2Bdw.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">Что интересного я вынес за два года разработки и продвижения мобильной игры</a>
                        <div class="author"><a href="">Юрий Антонов</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*dl1vUVg2QOtEJ7nW80tVPQ.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">Google Analytics для телеграм бота</a>
                        <div class="author"><a href="">Андрей Степанов</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*zTWx76OcQW4gK-2Q4Hz1kg.png" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">An Unintended Journal of Sorts</a>
                        <div class="author"><a href="">John Doe</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/0*B04L2Ma1UbOvo7xg.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">5 lessons on building a newsroom from scratch</a>
                        <div class="author"><a href="">Gavin Sheridan</a></div>
                    </div>
                </div>
            </div>
            <div class="title-name">
                Самые комментируемые
            </div>
            <div class="items">
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*zTWx76OcQW4gK-2Q4Hz1kg.png" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">An Unintended Journal of Sorts</a>
                        <div class="author"><a href="">John Doe</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*dl1vUVg2QOtEJ7nW80tVPQ.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">Google Analytics для телеграм бота</a>
                        <div class="author"><a href="">Андрей Степанов</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*9pG1gSOmgPNrLxuglK2Bdw.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">Что интересного я вынес за два года разработки и продвижения мобильной игры</a>
                        <div class="author"><a href="">Юрий Антонов</a></div>
                    </div>
                </div>
                <div class="item">
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/fit/c/60/60/0*B04L2Ma1UbOvo7xg.jpeg" alt="" />
                    </a>
                    <div class="info-block">
                        <a href="">5 lessons on building a newsroom from scratch</a>
                        <div class="author"><a href="">Gavin Sheridan</a></div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
        </div>

    </div>

{% endblock %}