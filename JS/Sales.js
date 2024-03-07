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
        optionsList.classList.toggle('active'); // Toggle the active class
    });

    optionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedOption.textContent = event.target.textContent;
            optionsList.classList.remove('active'); // Hide the options
            var selectedValue = event.target.getAttribute('data_value');
            console.log('Selected Value:', selectedValue);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var selectedOption = document.querySelector('.selected_option_billing');
    var optionsList = document.querySelector('.options_billing');

    selectedOption.addEventListener('click', function () {
        optionsList.classList.toggle('active'); // Toggle the active class
    });

    optionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedOption.textContent = event.target.textContent;
            optionsList.classList.remove('active'); // Hide the options
            var selectedValue = event.target.getAttribute('data_value');
            console.log('Selected Value:', selectedValue);
        }
    });
});


/*------------------------- CHART -------------------------*/

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
    fontFamily: "ClassyVogue"
    });
    
    xRenderer.grid.template.setAll({
    opacity: 0
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "country",
    renderer: xRenderer,
    }));
    
    var yRenderer = am5xy.AxisRendererY.new(root, {
    strokeOpacity: 1,
    strokeWidth: 5,
    stroke:"#C5AE96",
    })
    yRenderer.labels.template.setAll({
    paddingRight: 20,
    fontFamily: "ClassyVogue"
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
    categoryXField: "country",
    tooltip: am5.Tooltip.new(root, {
        labelText: "{country} : {valueY} Rupees",
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
    labelText: "[fontFamily: ClassyVogue]{country} : {valueY} ₹",
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
    country: "January",
    value: 14000
    }, {
    country: "February",
    value: 7820
    }, {
    country: "March",
    value: 9050
    }, {
    country: "April",
    value: 10500
    }, {
    country: "May",
    value: 26100
    }, {
    country: "June",
    value: 12100
    }, {
    country: "July",
    value: 11650
    }, {
    country: "August",
    value: 20350
    }, {
    country: "September",
    value: 10010
    }, {
    country: "October",
    value: 15050
    }, {
    country: "November",
    value: 22500
    }, {
    country: "December",
    value: 26800
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()