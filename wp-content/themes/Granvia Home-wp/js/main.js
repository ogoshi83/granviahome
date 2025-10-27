$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle-btn").on("click", function () {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open");
        } else {
            $("header").addClass("open");
        }
    });

    $("nav a").on("click", function () {
        $("header").removeClass("open");
    });

    /*=================================================
    PICK UP スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $(".slick-area").slick({
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "20px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    // フェイドイン
    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point1").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point2").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point3").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point4").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });

    $(window).scroll(function () {
        // クラスに対して順に処理を行う
        $("#point5").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // クラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // クラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
            }
        });
    });
});

/* jQuery(function ($) {
    const headerHeight = 100;
    if (window.location.hash) {
        window.scrollTo(0, 0);
        setTimeout(function () {
            const target = $(window.location.hash);
            if (target.length) {
                const position = target.offset().top - headerHeight;
                $('html,body').animate({ scrollTop: position }, 600, 'swing');
            }
        }, 900);
    }
}); */




jQuery(function ($) {
    const headerHeight = 100; // 固定ヘッダーの高さに合わせて調整

    // ページロード完了後に実行
    $(window).on('load', function () {
        const rawHash = window.location.hash; // URLの#部分を取得
        if (rawHash) {
            // 一旦トップに戻して、ブラウザの瞬間ジャンプを防ぐ
            $('html, body').scrollTop(0);

            // ハッシュをデコードして要素を取得
            const hash = decodeURIComponent(rawHash);
            const target = $(hash);

            if (target.length) {
                const position = target.offset().top - headerHeight;
                // ページ描画が完全に終わってからゆっくりスクロール
                setTimeout(function () {
                    $('html, body').animate(
                        { scrollTop: position },
                        400,
                        'swing'
                    );
                }, 0); // 少し待ってからスクロール
            }
        }
    });

    // ページ内リンクのクリックもスムーズに
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const hash = decodeURIComponent($(this).attr('href'));
        const target = $(hash);

        if (target.length) {
            const position = target.offset().top - headerHeight;
            $('html, body').animate(
                { scrollTop: position },
                400,
                'swing'
            );
            history.replaceState(null, '', location.pathname + location.search + hash);
        }
    });
});

