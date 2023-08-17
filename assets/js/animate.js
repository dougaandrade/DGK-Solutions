function drawareaChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['SOCIAL MEDIA', 100],
        ['MOTION DESIGN', 45],
        ['DESIGN', 234],
        ['WEB DESIGN', 4],
        ['VIDEOS', 3]
    ]);

    var options = {
        title: 'DEMANDAS RECENTES',
        width: 600,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('area_chart_div'));
    chart.draw(data, options);
};


google.charts.setOnLoadCallback(drawdemandaChart);

google.charts.setOnLoadCallback(drawareaChart);

function drawdemandaChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['FESTAS', 234],
        ['INSTAGRAM', 54],
        ['RESTAURANTES', 223],
        ['LOJAS', 569],
        ['CASAMENTOS', 54]

    ]);
    var options = {
        title: 'ÁREAS RECENTES',
        width: 600,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('demanda_chart_div'));
    chart.draw(data, options);
}