var path = window.location.pathname;
var currentPage = path.split("/").pop();
console.log( currentPage );

/* ------------------------- SKELETON-ANIMATION-FOR-LOGIN-IMAGE ------------------------- */

window.addEventListener("load", function () {
    skeletonAnimation.style.opacity = 0;
    main_image.style.opacity = 0.2;
});


/* ------------------------- JS-FOR-EACH-PAGE ------------------------- */

if (currentPage === "Login.html") {


    /*------------------------- PASSWORD-HIDE -------------------------*/

    const passwordToggleBtn = document.getElementById('passwordHideButton');
    const passwordInput = document.getElementById('password');
    var i = document.getElementById('lid');

    passwordToggleBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        i.style.transform = "scaleX(1) scaleY(1)";
        i.classList.add('animateEye');
    } else {
        passwordInput.type = 'password';
        i.style.transform = "scaleX(1) scaleY(0)";
        i.classList.remove('animateEye');
    }
    });


    /*------------------------- LOGIN-BUTTON-ANIMATION -------------------------*/

    function redirectToHomePage() {

        var BtnText = document.getElementById("login_btn_text");
        var loading = document.getElementById("load");
      
        BtnText.style.opacity = 0;
        loading.style.opacity = 1;
      
        document.getElementById("load").style.display = "flex";
        setTimeout(() => {
            document.getElementById("load").style.opacity = 1;
        }, 400);
      
        document.getElementById("login_btn_text").style.display = "none";
        setTimeout(() => {
          document.getElementById("login_btn_text").style.opacity = 0;
        }, 400);
      
        setTimeout(() => {
          window.location.href = 'HomePage.html';
        }, 1500);
      
        setTimeout(() => {
          BtnText.style.opacity = 1;
          loading.style.opacity = 0;
      
          document.getElementById("load").style.display = "none";
          setTimeout(() => {
              document.getElementById("load").style.opacity = 0;
          }, 400);
      
          document.getElementById("login_btn_text").style.display = "block";
          setTimeout(() => {
            document.getElementById("login_btn_text").style.opacity = 1;
          }, 400);
        }, 1700)
      
      }

} 
else if (currentPage === "HomePage.html") {

    /*-------------------------------------------------- HOMEPAGE --------------------------------------------------*/
    /*------------------------- CUSTOM-DROPDOWN -------------------------*/

    function accountDropdownOpen() {
        document.getElementById("account_menu").style.display = "flex";
        setTimeout(() => {
            document.getElementById("account_menu").style.opacity = 1;
        }, 100);
    }
    function accountDropdownClose() {
        setTimeout(() => {
            document.getElementById("account_menu").style.display = "none";
        }, 400);
        document.getElementById("account_menu").style.opacity = 0;
    }


    document.addEventListener('DOMContentLoaded', function () {
        var selectedOption = document.querySelector('.selected_option');
        var optionsList = document.querySelector('.options');

        selectedOption.addEventListener('click', function () {
            optionsList.classList.toggle('active');
        });

        optionsList.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                selectedOption.textContent = event.target.textContent;
                optionsList.classList.remove('active');
                var selectedValue = event.target.getAttribute('data_value');
                console.log('Selected Value:', selectedValue);
            }
        });
    });


    /*------------------------- SWITCH-STATE -------------------------*/

    function switchState(event,switchNumber) {
        event.stopPropagation();
        const bulb = document.getElementById(`bulb${switchNumber}`);
        const table_top = document.getElementById(`table_top${switchNumber}`);
    
        const bulb_states = ['bulb_running', 'bulb_pending', 'bulb_off'];
        const table_top_states = ['table_top_running', 'table_top_pending', 'table_top_off'];
    
        // Get current class index for bulb
        let bulbIndex = bulb_states.indexOf(bulb.classList[0]);
        if (bulbIndex === -1) {
            bulbIndex = 0; // Default to the first class if not found
        }
    
        // Get current class index for table_top
        let tableTopIndex = table_top_states.indexOf(table_top.classList[0]);
        if (tableTopIndex === 0) {
            tableTopIndex = 0; // Default to the first class if not found
        }
    
        // Toggle classes for bulb and table_top using the same index
        bulb.classList.remove(bulb_states[bulbIndex]);
        table_top.classList.remove(table_top_states[tableTopIndex]);
    
        bulbIndex = (bulbIndex + 1) % bulb_states.length;
        tableTopIndex = (tableTopIndex + 1) % table_top_states.length;
    
        bulb.classList.add(bulb_states[bulbIndex]);
        table_top.classList.add(table_top_states[tableTopIndex]);
    }

}
else if (currentPage === "AddItemsPage.html") {
    
    /*-------------------------------------------------- ADDITEMSPAGE --------------------------------------------------*/

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

}
else if (currentPage === "Billing.html") {

    /*-------------------------------------------------- BILLING --------------------------------------------------*/

    /* --------------------- POPUP --------------------- */

    function openPop(ID) {

        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.disabled = true;
        });
    
        document.getElementById(ID).style.opacity = "1";
        document.getElementById(ID).style.zIndex = "99";
        document.querySelector("body").style.overflow = "hidden";
    }
    function closePop(ID) {
    
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.disabled = false;
        });
    
        document.getElementById(ID).style.opacity = "0";
        document.getElementById(ID).style.zIndex = "-2";
        document.querySelector("body").style.overflow = "auto";
    }
    
}
else if (currentPage === "Sales.html") {

    /*-------------------------------------------------- SALES --------------------------------------------------*/

    /*------------------------- DATEPICKER -------------------------*/

    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy"
            ,	duration: "fast"
        });
    } );
    $( function() {
        $( "#datepicker1" ).datepicker({
            dateFormat: "dd-mm-yy"
            ,	duration: "fast"
        });
    } );


    /*------------------------- CUSTOM-DROPDOWN -------------------------*/

    document.addEventListener('DOMContentLoaded', function () {
        var selectedOption = document.querySelector('.selected_option_sales');
        var optionsList = document.querySelector('.options_sales');

        selectedOption.addEventListener('click', function () {
            optionsList.classList.toggle('active');
        });

        optionsList.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                selectedOption.textContent = event.target.textContent;
                optionsList.classList.remove('active');
                var selectedValue = event.target.getAttribute('data_value');
                console.log('Selected Value:', selectedValue);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        var selectedOption = document.querySelector('.selected_option_billing');
        var optionsList = document.querySelector('.options_billing');

        selectedOption.addEventListener('click', function () {
            optionsList.classList.toggle('active');
        });

        optionsList.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                selectedOption.textContent = event.target.textContent;
                optionsList.classList.remove('active');
                var selectedValue = event.target.getAttribute('data_value');
                console.log('Selected Value:', selectedValue);
            }
        });
    });
    
}


/*------------------------- CHART-AND-THEME -------------------------*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        am5.ready(function() {
                        
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("chartdiv");
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
            am5themes_Animated.new(root)
            ]);
        
            
            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true,
            paddingLeft:0,
            paddingRight:1,
            }));
            
            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
            cursor.lineY.set("visible", false);
            cursor.lineX.set("visible", false);
            
            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xRenderer = am5xy.AxisRendererX.new(root, { 
            minGridDistance: 30, 
            minorGridEnabled: true,
            strokeOpacity: 1,
            strokeWidth: 5,
            stroke:"#413F44"
            });
        
            xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15,
            fontFamily: "ClassyVogue",
            fill: am5.color("#F2EBD9")
            });
            
            xRenderer.grid.template.setAll({
            opacity: 0
            })
            
            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "month",
            renderer: xRenderer,
            }));
            
            var yRenderer = am5xy.AxisRendererY.new(root, {
            strokeOpacity: 1,
            strokeWidth: 5,
            stroke:"#413F44",
            })
            yRenderer.labels.template.setAll({
            paddingRight: 20,
            fontFamily: "ClassyVogue",
            fill: am5.color("#F2EBD9")
            });
            yRenderer.grid.template.setAll({
                opacity:0
            })
            
            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: yRenderer
            }));
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            // Create series
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "month",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{month} : {valueY} Rupees",
                getFillFromSprite: true,
                getStrokeFromSprite: true,
                autoTextColor: true,
                getLabelFillFromSprite: true,
            }),
            }));
        
        
            series.columns.template.setAll({
            fillOpacity: 0.5,
            strokeWidth: 2,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
            });
            var tooltip = am5.Tooltip.new(root, {
            labelText: "[fontFamily: ClassyVogue]{month} : {valueY} ₹",
            });
        
            tooltip.get("background").setAll({
            stroke: am5.color(0x413F44),
            strokeOpacity: 0.8,
            fillOpacity: 0.5,
            strokeWidth: 2,
            });
        
            series.set("tooltip", tooltip);
        
            // Set background color for bars
            series.columns.template.set("fill", am5.color("#413F44")); // Set your desired color here
            series.columns.template.set("stroke", am5.color("#413F44"));
        
        
            // Set data
            var data = [{
            month: "January",
            value: 140000
            }, {
            month: "February",
            value: 78020
            }, {
            month: "March",
            value: 90050
            }, {
            month: "April",
            value: 100500
            }, {
            month: "May",
            value: 260100
            }, {
            month: "June",
            value: 120100
            }, {
            month: "July",
            value: 110650
            }, {
            month: "August",
            value: 200350
            }, {
            month: "September",
            value: 100010
            }, {
            month: "October",
            value: 150050
            }, {
            month: "November",
            value: 220500
            }, {
            month: "December",
            value: 260800
            }];
            
            xAxis.data.setAll(data);
            series.data.setAll(data);
        
        
            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear(1000);
            chart.appear(1000, 100);
            
            }); // end am5.ready()
    }
    else if (currentTheme === 'light') {
        am5.ready(function() {
                        
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
    am5themes_Animated.new(root)
    ]);

    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true,
    paddingLeft:0,
    paddingRight:1,
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { 
    minGridDistance: 30, 
    minorGridEnabled: true,
    strokeOpacity: 1,
    strokeWidth: 5,
    stroke:"#C5AE96"
    });

    xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15,
    fontFamily: "ClassyVogue",
    fill: am5.color("#000000")
    });
    
    xRenderer.grid.template.setAll({
    opacity: 0
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "month",
    renderer: xRenderer,
    }));
    
    var yRenderer = am5xy.AxisRendererY.new(root, {
    strokeOpacity: 1,
    strokeWidth: 5,
    stroke:"#C5AE96",
    })
    yRenderer.labels.template.setAll({
    paddingRight: 20,
    fontFamily: "ClassyVogue",
    fill: am5.color("#000000")
    });
    yRenderer.grid.template.setAll({
        opacity:0
    })
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: yRenderer
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    // Create series
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "month",
    tooltip: am5.Tooltip.new(root, {
        labelText: "{month} : {valueY} Rupees",
        getFillFromSprite: true,
        getStrokeFromSprite: true,
        autoTextColor: true,
        getLabelFillFromSprite: true,
    }),
    }));


    series.columns.template.setAll({
    fillOpacity: 0.5,
    strokeWidth: 2,
    cornerRadiusTL: 5,
    cornerRadiusTR: 5
    });
    var tooltip = am5.Tooltip.new(root, {
    labelText: "[fontFamily: ClassyVogue]{month} : {valueY} ₹",
    });

    tooltip.get("background").setAll({
    stroke: am5.color(0xC5AE96),
    strokeOpacity: 0.8,
    fillOpacity: 0.5,
    strokeWidth: 2,
    });

    series.set("tooltip", tooltip);

    // Set background color for bars
    series.columns.template.set("fill", am5.color("#C5AE96")); // Set your desired color here
    series.columns.template.set("stroke", am5.color("#C5AE96"));


    // Set data
    var data = [{
    month: "January",
    value: 140000
    }, {
    month: "February",
    value: 78020
    }, {
    month: "March",
    value: 90050
    }, {
    month: "April",
    value: 100500
    }, {
    month: "May",
    value: 260100
    }, {
    month: "June",
    value: 120100
    }, {
    month: "July",
    value: 110650
    }, {
    month: "August",
    value: 200350
    }, {
    month: "September",
    value: 100010
    }, {
    month: "October",
    value: 150050
    }, {
    month: "November",
    value: 220500
    }, {
    month: "December",
    value: 260800
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    }
}