<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>블로그</title>
    <link rel="stylesheet" href="/resource/common.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script src="/resource/common.js"></script>
</head>

<body>
    <div class="top-bar con">
        <div class="logo flex flex-1-0-0 con">
            <img src="./resource/img/미강로고.png" style="width:70px;">
        </div>
        <div class="mobile-top-bar window-md-down flex">
            <a href="#" class="btn-toggle-mobile-side-bar flex flex-self-c">
                <div></div>
                <div></div>
                <div></div>
            </a>
        </div>
        <div class="sns con ">
            <div class="sns-icon con">
                <img src="./resource/img/SNS아이콘 1.png" alt="">
            </div>
        </div>
        <div class="top-bar window-md-up">
            <div class="height-100p flex">
                <nav class="menu-box flex flex-1-0-0 con">
                    <ul class="flex flex-1-0-0">
                        <li class=" flex"><a href="/" class="flex flex-1-0-0 flex-ai-c flex-jc-c">HOME</a></li>
                        <li class="flex"><a href="/list.php" class="flex flex-1-0-0 flex-ai-c flex-jc-c">ARTICLES</a>
                        </li>
                        <li class="flex"><a href="/list.php" class="flex flex-1-0-0 flex-ai-c flex-jc-c">PORTFOLIO</a>
                        </li>
                        <li class="flex"><a href="/aboutme.php" class="flex flex-1-0-0 flex-ai-c flex-jc-c">ABOUT
                                ME</a>
                        </li>

                        <li class="flex">
                            <a href="#" class="flex flex-1-0-0 flex-ai-c flex-jc-c">SNS</a>
                        </li>
                </nav>
            </div>
        </div>
    </div>

    <div class="background"></div>
    <div class="mobile-side-bar">
        <div class="close">
            <a href="#">close</a>
        </div>
        <div class="side-box">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT ME</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li class="sns-menu"><a href="#">SNS</a>
                    <ul>
                        <li><a href="#">FaceBook</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#" class="talk">Kakao Talk</a>
                            <ul>
                                <li><a href="#">11</a></li>
                                <li><a href="#">22</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
