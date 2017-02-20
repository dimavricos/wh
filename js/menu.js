var AjaxHelper = {
    //load a json from server
    loadJSON: function(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }
};

var UiHelper = {
     // create the ul
     appendUl: function (items) { 
        var ul = document.createElement("UL");
        for(var i=0; i<items.length; i++) {
            ul.appendChild(this.appendLi(items[i]));
        }
        return ul;
    },
    // create the li
    appendLi: function (item) {
        var helper = this;  
        var li = document.createElement("LI");
        li.innerHTML = item.description;
        
        if (item.cssClass != "") 
            li.className = item.cssClass;
        
        li.id = item.id;
        
        if(item.menu != null) {
            li.appendChild(helper.appendUl(item.menu));
            li.firstElementChild.style.display = 'none';
            li.addEventListener("click", function(){
                if(li.firstElementChild.style.display === 'none'){
                    li.firstElementChild.style.display = 'block';
                }else{
                    li.firstElementChild.style.display = 'none';
                }
            });
        }

        return li;
    }
};

// load the json
AjaxHelper.loadJSON('menu.json', function(data) {
    document.getElementById('menu').appendChild(UiHelper.appendUl(data.menu));
}, function(data){
    alert(data.status);
});