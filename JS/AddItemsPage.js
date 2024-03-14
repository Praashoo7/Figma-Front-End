/* --------------------- DROPDOWN-SEARCH --------------------- */

function searchDropdownOpen() {
    document.getElementById("search_options").style.display = "block";
    setTimeout(() => {
        document.getElementById("search_options").style.opacity = 1;
    }, 100);
}
function searchDropdownClose() {
    setTimeout(() => {
        document.getElementById("search_options").style.display = "none";
    }, 400);
    document.getElementById("search_options").style.opacity = 0;
}
  

/* --------------------- FILTER-SEARCH --------------------- */

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("search_options");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].parentNode.style.display = "";
        } else {
        a[i].parentNode.style.display = "none";
        }
    }
}


/* --------------------- ADD-SEARCH-VALUE --------------------- */

var searchLinks = document.querySelectorAll('.search_data');
searchLinks.forEach(function(link) {
    link.onclick = function() {
    var data = this.innerHTML;
    document.getElementById("searchInput").value = "";
    document.getElementById("searchInput").value = data;
  };
});


/* --------------------- ADD-SEARCH-VALUE-BTN --------------------- */

var addBtns = document.querySelectorAll('.add_search');
addBtns.forEach(function(btn) {
    btn.onclick = function() {

    var anchor = this.previousElementSibling;
    
    // Check if the previous sibling is an anchor tag
    if (anchor && anchor.tagName === 'A') {
    // Get the inner HTML of the anchor tag
    var dataBtn = anchor.innerHTML;
    
    document.getElementById("searchInput").value = "";
    document.getElementById("searchInput").value = dataBtn;
  };
};
});


/* --------------------- WIDTH-MATCH --------------------- */

function matchWidth() {
    var topDiv = document.getElementById('searchInput');
    var bottomDiv = document.getElementById('search_options');
    
    bottomDiv.style.width = topDiv.offsetWidth + 'px';
    if (window.innerWidth <= 575) {
        topDiv.style.width = "100%";
      }
    if (window.innerWidth <= 575 & window.innerWidth >= 376){
        bottomDiv.style.width = "85%";
    }
    else if (window.innerWidth <= 376){
        bottomDiv.style.width = "240px";
    }
    }

  matchWidth();
  window.addEventListener('resize', matchWidth);