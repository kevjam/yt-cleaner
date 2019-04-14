var items = {};
$(document).ready(function() {
    var storage = chrome.storage.sync;
    $(':checkbox').each(function(index, element) {
        var name = $(this).attr("name");
        chrome.storage.sync.get(name, function(items) {
            element.checked = items[name];
        });
    });
    
    $(".checkbox-container").on("change", ":checkbox", saveSettings);
    function saveSettings() {
        var name = this.name;
        items[name] = this.checked;
        chrome.storage.sync.set(items, function() {
        });
    }
});

var target = document.querySelector('body');
var observer = new MutationObserver(function (mutations) {
    chrome.storage.sync.get(["brand_icon","end_cards"], function(items) {
    mutations.forEach(function (mutation) {
        if(mutation.addedNodes.length){
            var branding = document.querySelector('.branding-img-container');
            if(items.brand_icon && branding) branding.style.display = "none";

            var cards = document.querySelectorAll('.ytp-ce-element');
            if(items.end_cards && cards) for (var i = 0; i < cards.length; i++) cards[i].style.display = "none";
            
        }
    });
});
});

var config = { addedNodes: true,childList: true, subtree:true };
observer.observe(target, config);