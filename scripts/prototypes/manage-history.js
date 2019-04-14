function deleteLivechats(x){
    var button = document.getElementById('delete-button')
    button.children[0].click();

    setTimeout(function () {
        document.getElementById('confirm-button').click();
        button.parentNode.removeChild(button);
    }, 500);

    if (x > 1 && document.getElementById('delete-button')) setTimeout(deleteLivechats, 1000, --x);
}
deleteLivechats(5);

function deleteComments(x){
    var menu = document.getElementById('menu');
    var parent = menu.parentNode;
    menu.children[0].children[1].click();

    setTimeout(function () {
        var listbox = document.getElementsByTagName('paper-listbox')[0];
        listbox.children[1].children[0].click();
    }, 500);

    setTimeout(function () {
        var button = document.getElementById('confirm-button');
        button.click();
    }, 500);

    var parent = menu.parentNode;
    setTimeout(function () {
        parent.innerHTML = '';
    }, 500);

    if(x > 1 && document.getElementById('menu')) setTimeout(deleteComment, 1000, --x);
}
deleteComment(5);