function showMenu() {
    let status = document.getElementById('menu').style.display;
    if (status == '') {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('menu_button').classList.add('close_menu');
    } else {
        document.getElementById('menu').style.display = '';
        document.getElementById('menu_button').classList.remove('close_menu');
    }
}

document.getElementById('menu_button').addEventListener('click', showMenu);
