function initialize() {

    menuList.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('sitemap_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('sitemap_menu_link');
        e.appendChild(link);
        document.getElementById('sitemap_menu').appendChild(e);
    });

    footerMenu.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('sitemap_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('sitemap_menu_link');
        e.appendChild(link);
        document.getElementById('sitemap_menu').appendChild(e);
    });
}

initialize();