$(document).ready(function() {
    // initial posittion
    const scrollValues = 350;
    main_image_slider.scrollLeft = 0;
    tabControl = $('.progres-control');

    $(".progres-control:eq(0)").css("background-color", "#D72624");
    $(".progres-control:eq(1)").css("background-color", "#808080");
    $(".progres-control:eq(2)").css("background-color", "#808080");
    $(".progres-control:eq(3)").css("background-color", "#808080");

    $(".progres-control:eq(0)").click(function() {
        $(".progres-control").each((index) => {
            $(".progres-control:eq(index)").css("background-color", "#D6D6D6");
            $(".progres-control:eq(1)").css("background-color", "#808080");
            $(".progres-control:eq(2)").css("background-color", "#808080");
            $(".progres-control:eq(3)").css("background-color", "#808080");
        });
        main_image_slider.scrollLeft = scrollValues * 0;
        $(this).css("background-color", "#D72624");
    });

    $(".progres-control:eq(1)").click(function() {
        $(".progres-control").each((index) => {
            $(".progres-control:eq(index)").css("background-color", "#D6D6D6");
            $(".progres-control:eq(0)").css("background-color", "#808080");
            $(".progres-control:eq(2)").css("background-color", "#808080");
            $(".progres-control:eq(3)").css("background-color", "#808080");
        });
        main_image_slider.scrollLeft = scrollValues * 1;
        $(this).css("background-color", "#D72624");
    });

    $(".progres-control:eq(2)").click(function() {
        $(".progres-control").each((index) => {
            $(".progres-control:eq(index)").css("background-color", "#D6D6D6");
            $(".progres-control:eq(1)").css("background-color", "#808080");
            $(".progres-control:eq(0)").css("background-color", "#808080");
            $(".progres-control:eq(3)").css("background-color", "#808080");
        });
        main_image_slider.scrollLeft = scrollValues * 2;
        $(this).css("background-color", "#D72624");
    });

    $(".progres-control:eq(3)").click(function() {
        $(".progres-control").each((index) => {
            $(".progres-control:eq(index)").css("background-color", "#D6D6D6");
            $(".progres-control:eq(1)").css("background-color", "#808080");
            $(".progres-control:eq(0)").css("background-color", "#808080");
            $(".progres-control:eq(2)").css("background-color", "#808080");
        });
        main_image_slider.scrollLeft = scrollValues * 3;
        $(this).css("background-color", "#D72624");
    });
});

//