// Dropdown Menu


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  d3.json("all_data_with_classes_copy.json").then((data) => {

    var schoolName = []

    Object.values(data['schools']).forEach((school) => {
      // value is a dictionary for a school
      let name = school['School_Name_and_Cohort_Year'];
      schoolName.push(name);
    });

    schoolName.forEach((school) => {
      selector
        .append("option")
        .text(school)
        .property("value", school);
    });

    // Use the first sample from the list to build the initial plots
    var firstSchool = schoolName[0];
    buildCharts(firstSchool);
  });
};

// Initialize the dashboard
init();

function optionChanged(newSchool) {
  // Fetch new data each time a new school is selected
  buildCharts(newSchool);
};

// Chart Code

// 1. Create the buildCharts function.
function buildCharts(schoolName) {

  // 2. Use d3.json to load and retrieve the json file 
  d3.json("all_data_with_classes_copy.json", function (data) { 
    
    var schoolsArray = data['schools'];
    // Variable that filters the schools for the object with the desired school name.
    var filteredSchools = schoolsArray.filter(schoolObj => schoolObj.School_Name_and_Cohort_Year == schoolName);

    //  Variable for first sample in the array.
    var firstSchool = filteredSchools[0];
    console.log(firstSchool);

    var grads = firstSchool['Percent_Grads']
    var regents = firstSchool['Percent_Total_Regents_of_Cohort'];
    var advancedRegents = firstSchool['Percent_Advanced_Regents_of_Cohort'];
    var dropout = firstSchool['Percent_Dropout'];
    var asian = firstSchool['Percent_Asian_Cohort'];
    var black = firstSchool['Percent_Black_Cohort'];
    var hispanic = firstSchool['Percent_Hispanic_Cohort']; 
    var white = firstSchool['Percent_White_Cohort'];
    var nativeAmerican = firstSchool['Percent_Native_American_Cohort'];
    var multiRacical = firstSchool['Percent_MultiRacial_Cohort'];
    var female = firstSchool['Percent_Female_Cohort'];
    var male = firstSchool['Percent_Male_Cohort'];
    var disadv = firstSchool['Percent_Econ_Disadv_Cohort'];
    var notDisadv = firstSchool['Percent_Not_Econ_Disadv_Cohort'];
    var swd = firstSchool['Percent_SWD_Cohort'];
    var notSWD = firstSchool['Percent_Not_SWD_Cohort'];
    var mlclass = firstSchool['Class']

    // Bar Chart

    function classColor () {
      if (mlclass === 2.0) {
        return 'green';
      }
      if (mlclass === 1.0) {
        return 'blue';
      }
      else {
        return 'red';
      }
    }

    function legend() {
      if (mlclass === 2.0){
        return 'Class 2'
      }
      if (mlclass === 1.0) {
        return 'Class 1';
      }
      else {
        return 'Class 0';
      }
    }

    var barData = [{
      x: ['% Grads', '% Total Regents of Cohort', '% Advanced Regents of Cohort', '% Dropout'],
      y: [grads, regents, advancedRegents, dropout],
      type: "bar",
      marker: {
        color: classColor()
      },
      name: legend()
    }];

    var barLayout = {
     title: "School Graduation and Testing Information",
     showlegend: true
    };

    Plotly.newPlot("bar", barData, barLayout);

    // Pie Chart 
    
    var allLabels = [
      ['% Asian Cohort', '% Black Cohort', '% Hispanic Cohort', '% White Cohort', '% Native American Cohort', '% Multi-Racial Cohort'],
      ['% Female Cohort', '% Male Cohort'],
      ['% Econ Disadv', '% Not Econ Disadv'],
      ['% SWD', '% Not SWD'] 
    ];
    
    var allValues = [
      [asian, black, hispanic, white, nativeAmerican, multiRacical],
      [female, male],
      [disadv, notDisadv],
      [swd, notSWD]
    ];
    
    var ultimiateColors = [
      ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
      ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
      ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
      ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];

    var data = [{
      labels: allLabels[0],
      values: allValues[0],
      type: "pie",
      name: 'Ethniticies',
      marker: {
          colors: ultimiateColors[0]
      },
      domain: {
          row: 0,
          column: 0
      },
      hoverinfo: 'label+percent',
      textinfo: 'none'
    },
    {
      labels: allLabels[1],
      values: allValues[2],
      type: "pie",
      name: 'Gender',
      marker: {
          colors: ultimiateColors[1]
      },
      domain: {
          row: 0,
          column: 1
      },
      hoverinfo: 'label+percent',
      textinfo: 'none'
    }, 
    {
      labels: allLabels[2],
      values: allValues[2],
      type: "pie",
      name: 'Economic Advantage',
      marker: {
          colors: ultimiateColors[2]
      },
      domain: {
          row: 1,
          column: 0
      },
      hoverinfo: 'label+percent',
      textinfo: 'none'
    },
    {
      labels: allLabels[3],
      values: allValues[3],
      type: "pie",
      name: 'Students with Disabilities',
      marker: {
          colors: ultimiateColors[3]
      },
      domain: {
          row: 1,
          column: 1
      },
      hoverinfo: 'label+percent',
      textinfo: 'none'
    }];

    var layout = {
      title: "Pie Charts",
      height: 400,
      width: 500,
      grid: {rows: 2, columns: 2}
    };

    Plotly.newPlot("piecharts", data, layout);
  
  });
};

d3.selectAll("#selDataset").on("change", optionChanged);
