'use strict';
const render = (root, data) => {
    //root.empty();
    root.append(Home());
}

$(_ => {
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 1
    });
    const root = $("#root");
    render(root);

});
