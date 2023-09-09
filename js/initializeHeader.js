function initialize() {

    menuList.forEach(element => {
        var e = document.createElement('li');
        e.classList.add('header_menu_li');
        var link = document.createElement('a');
        link.href = element.path;
        link.text = element.name;
        link.classList.add('header_menu_link');
        e.appendChild(link);
        document.getElementById('header_menu').appendChild(e);

        // スマホレイアウト時のメニュー
        var div = document.createElement('div');
        div.classList.add('menu_container_menu_text');
        var a = document.createElement('a');
        a.href = element.path;
        a.text = element.name;
        div.appendChild(a);
        document.getElementById('sp_menu').appendChild(div);
    });

    // スマホレイアウト時のメニューには追加
    footerMenu.forEach(element => {
        var div = document.createElement('div');
        div.classList.add('menu_container_menu_text');
        var a = document.createElement('a');
        a.href = element.path;
        a.text = element.name;
        div.appendChild(a);
        document.getElementById('sp_menu').appendChild(div);
    });

    document.getElementById('header_phone_number').innerHTML = phoneNumber;
    document.getElementById('contactButtonHeader').textContent = headerContactButtonCaption;
}

initialize();