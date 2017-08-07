; (function () {
          var navHTML = `
                <div class="nav-container">
                    <div class="logo">
                        <span></span>
                        <img src="./img/logo.png" alt="">
                    </div>
                    <div class="language">
                        <span>简</span>
                    </div>
                    <div class="nav">
                        <ul>
                            <li class="">
                                <a href="./index.html">首页</a>
                            </li>
                            <li class="">
                                <a href="#">关于巨牛</a>
                                <div class="nav-bar2 two-nav-container">
                                    <div class="body">
                                        <a href="./brief.html">公司介绍</a>
                                        <a href="./Development.html">发展历程</a>
                                        <a href="./personnel.html">人才理念</a>
                                        <a href="./team.html">团队介绍</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">巨牛业务</a>
                                <div class="nav-bar3 two-nav-container">
                                    <div class="body">
                                        <a href="./core.html">核心业务</a>
                                        <a href="./achievement.html">辉煌业绩</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">巨牛动态</a>
                                <div class="nav-bar4 two-nav-container">
                                    <div class="body">
                                        <a href="./cattlecare.html">巨牛关心</a>
                                        <a href="./carecattle.html">关心巨牛</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="./contact.html">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </div>
            `

          $(".header").append(navHTML);

          var $nav = $(".nav");
          /** nav 导航hover事件 添加class 与 显示二级导航 **/
          $nav.find("li").hover(function () {
                    $(this).addClass("nav-active").find(".two-nav-container").css({ height: "50px" });
          }, function () {
                    $(this).removeClass("nav-active").find(".two-nav-container").css({ height: "0px" });
          })

          /** 二级导航hover事件 **/
          $nav.find(".two-nav-container a").hover(function () {
                    $(this).addClass("two-nav-active")
          }, function () {
                    $(this).removeClass("two-nav-active")
          })

})();