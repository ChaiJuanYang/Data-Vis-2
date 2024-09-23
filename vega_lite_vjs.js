var vg1 = "map_plot.json";
vegaEmbed("#map_plot", vg1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg2 = "map_plot_death.json";
vegaEmbed("#map_plot_death", vg2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
