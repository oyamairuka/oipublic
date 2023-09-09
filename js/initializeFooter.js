function initialize() {
    document.getElementById('footer_company_info').innerHTML = companyName + "<br>"
        + postalCode + "<br>" + address + "<br>"
        + copyright;

    menuList.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('footer_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('footer_menu_link');
        e.appendChild(link);
        document.getElementById('footer_menu').appendChild(e);
    });

    footerMenu.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('footer_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('footer_menu_link');
        e.appendChild(link);
        document.getElementById('footer_additional_menu').appendChild(e);
    });
}

initialize();