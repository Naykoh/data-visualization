// first second et thirdCampaign : on décide quels graphes on veut voir pour une campagne determiné
//                                 a chaque changement on cache tous les graphes et on montre ceux voulus
function firstCampaign() {
  var first = document.getElementById("firstdiv");
  var second = document.getElementById("seconddiv");
  var third = document.getElementById("thirddiv");
  var fourth = document.getElementById("fourthdiv");
  var fifth = document.getElementById("fifthdiv");
  var sixth = document.getElementById("sixthdiv");
  var seventh = document.getElementById("seventhdiv");

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
sixth.style.display = "none";
seventh.style.display = "none";

first.style.display = "block";
third.style.display = "block";
fifth.style.display = "block";
sixth.style.display = "block";
}

function secondCampaign() {
var first = document.getElementById("firstdiv");
var second = document.getElementById("seconddiv");
var third = document.getElementById("thirddiv");
var fourth = document.getElementById("fourthdiv");
var fifth = document.getElementById("fifthdiv");
var sixth = document.getElementById("sixthdiv");
var seventh = document.getElementById("seventhdiv");

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
sixth.style.display = "none";
seventh.style.display = "none";

second.style.display = "block";
fourth.style.display = "block";
fifth.style.display = "block";
seventh.style.display = "block";
}

function thirdCampaign() {
  var first = document.getElementById("firstdiv");
  var second = document.getElementById("seconddiv");
  var third = document.getElementById("thirddiv");
  var fourth = document.getElementById("fourthdiv");
  var fifth = document.getElementById("fifthdiv");
  var sixth = document.getElementById("sixthdiv");
  var seventh = document.getElementById("seventhdiv");

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
sixth.style.display = "none";
seventh.style.display = "none";

first.style.display = "block";
second.style.display = "block";
third.style.display = "block";
fourth.style.display = "block";
sixth.style.display = "block";


}

// chargement pour les google charts
google.charts.load('current', {'packages':['timeline']});
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});
google.charts.load('current', {'packages':['table']});

// lance la fonction drawChart() lorsque la page est chargée
google.charts.setOnLoadCallback(drawChart);

// données pour les trois campagnes différentes "Twitter", "Facebook" et "Instagram"
var twitter = [
          ['Year', 'Sales', 'Expenses'],
          ['2013',  432,      400],
          ['2014',  786,      460],
          ['2015',  645,      1120],
          ['2016',  342,      540]
        ]

var facebook =  [
          ['Year', 'Sales', 'Expenses'],
          ['1999',  523,      345],
          ['2000',  642,      810],
          ['2002',  735,       243],
        ]

var instagram = [
          ['Year', 'Sales', 'Expenses'],
          ['2016',  534,      423],
          ['2017',  234,      500],
          ['2018',  635,       350],
          ['2019',  765,      600],
          ['2020',  231,      200]
        ]

// permet de definir les google charts
// docs google charts : https://developers.google.com/chart/interactive/docs
function drawChart() {
    //premier graphe : graphe Timeline affichant toutes les campagnes, chaque campagne est cliquable et affiche les graphes adaptés

    //instantiation du graphe que l'on associe a une div
    var charttimeline = new google.visualization.Timeline(document.getElementById('chart_timeline'));

    // creation des données
    var datatimeline = new google.visualization.DataTable();
    datatimeline.addColumn({ type: 'string', id: 'Term' });
    datatimeline.addColumn({ type: 'string', id: 'Name' });
    datatimeline.addColumn({ type: 'date', id: 'Start' });
    datatimeline.addColumn({ type: 'date', id: 'End' });
    datatimeline.addRows([[ 'Twitter', 'Twitter', new Date(2000, 1, 1), new Date(2000, 2, 22) ],
                          [ 'Facebook', 'Facebook',        new Date(2000, 3, 4),  new Date(2000, 5, 26) ],
                          [ 'Instagram', 'Instagram',  new Date(2000, 7, 12),  new Date(2000, 11, 25) ]]);



        // option permettant de ne pas afficher de tooltip lors du hover et de ne pas afficher des ids inutiles sur la gauche de la timeline
        var optionstimeline = {
            tooltip : {
            trigger : 'none'
            },
            timeline: { showRowLabels: false }
      };

      // apres avoir defini les parametres il faut draw le graphe
      charttimeline.draw(datatimeline, optionstimeline);


// instantation de tous les graphes en les associant a des divs
var chartgraph = new google.visualization.AreaChart(document.getElementById('firstdiv'));
var chartbar = new google.charts.Bar(document.getElementById('seconddiv'));
var chartdonut = new google.visualization.PieChart(document.getElementById('thirddiv'));
var chartscatter = new google.visualization.ScatterChart(document.getElementById('fourthdiv'));
var chartline = new google.visualization.LineChart(document.getElementById('fifthdiv'));
var chartbubble = new google.visualization.BubbleChart(document.getElementById('sixthdiv'));
var charttable = new google.visualization.Table(document.getElementById('seventhdiv'));








// update les données en fonction de la campagne choisie
function updateCharts(campaign) {

if(campaign == "Twitter") {
    var data = google.visualization.arrayToDataTable(twitter)
}
else if (campaign == "Facebook") {
    var data = google.visualization.arrayToDataTable(facebook)
}
else {
    var data = google.visualization.arrayToDataTable(instagram)
}

// le titre de chaque graphe est le nom de la campagne
var options = {
  title: campaign
};

// apres la definition des paramètres on draw pour update
chartgraph.draw(data, options);
chartdonut.draw(data, options);
chartbar.draw(data, options);
chartscatter.draw(data, options);
chartline.draw(data, options);
chartbubble.draw(data, options);
charttable.draw(data, options);


    }

// permet l'interaction avec la timeline
function selectHandler() {
  var selectedItem = charttimeline.getSelection()[0];
  if (selectedItem) {
    var selection = datatimeline.getValue(selectedItem.row, 0);
    document.getElementById("title").innerHTML = selection;


    if (selection == "Twitter"){
    //update des graphes et affichage seulement des graphes désirés
    updateCharts(selection);
    firstCampaign();


    }
    else if (selection == "Facebook"){
    updateCharts(selection);
    secondCampaign();

    }
    else {
    updateCharts(selection);
    thirdCampaign();

    }
  }
}

// permet l'interaction avec la timeline`
google.visualization.events.addListener(charttimeline, 'select', selectHandler);




}

