/**
 * THEME STUFF
**/
// Spring 2009 to Spring 2015

var RED    = "#da1924";
var BLUE   = "#2ac1dd";
var GREEN  = "#98A62F";
var YELLOW = "#f3bb06";
var ORANGE = "#F49F00";

/**
 *
 * CODE FOR SCHOOL COMPARISON CHART
 *
**/
var avgSAS  = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-sas.csv'
      },
      axis: {
          x: {
            label: 'Semester',
            type: 'category',
categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Score',
            min: 2,
            max: 3.5
          }
  }});
}
var avgSEAS = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-seas.csv'
      },
      axis: {
          x: {
            label: 'Semester',
            type: 'category',
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Score',
            min: 2,
            max: 3.5
          }
  }});
}
var avgWhar = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-whar.csv'
      },
      axis: {
          x: {
            label: 'Semester',
            type: 'category',
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Score',
            min: 2,
            max: 3.5
          }
  }});
}
var avgNurs = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-nurs.csv'
      },
      axis: {
          x: {
            label: 'Semester',
            type: 'category',
            categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
          },
          y: {
            label: 'Score',
            min: 2,
            max: 3.5
          }
  }});
}

/**
 *
 *CODE FOR SECTOR COMAPRISON
 *
**/
var sectQual = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: 'data/sectors_course-quality.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var sectDiff = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: 'data/sectors_difficulty.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", 'Fall \'09', "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var sectInst = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: 'data/sectors_instructor-quality.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var sectWork = function() {
  c3.generate({
    bindto: '#sector-comp-chart',
    data: {
      url: 'data/sectors_work-required.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}
/**
 *
 * CODE FOR STEM COMPARISON CHARAT
 *
**/
var stemQual = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: 'data/stemComp/stem-quality.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var stemDiff = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: 'data/stemComp/stem-difficulty.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var stemInst = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: 'data/stemComp/stem-instructor.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}

var stemWork = function() {
  c3.generate({
    bindto: '#stem-comp-chart',
    data: {
      url: 'data/stemComp/stem-work.csv'
    },
    axis: {
      x: {
        label: 'Semester',
        type: 'category',
        categories:["S'09", "F'09", "S'10", "F'10", "S'11", "F'11", "S'12", "F'12", "S'13", "F'13", "S'14", "F'14", "S'15"]
      },
      y: {
        label: 'Score',
        min: 2,
        max: 3.5
      }
    }}
  );
}
/**
 *
 * CODE FOR DEPARTMENT COMPARISON CHARAT
 *
**/
var diameter = 500, //max size of the bubbles
    color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#dept-comp-chart")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.csv("data/Department_Difficulty.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){
      d.value = +Math.pow(d["Difficulty"], 6); //Raise to power to scale as difference is really small
      d.school = +d["School"];
      return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles and color them correctly
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) {
          if (d.School == "SAS") {
            return BLUE;
          } else if (d.school == "SEAS"){
            return GREEN;
          } else if (d.School == "Wharton") {
            return ORANGE;
          } else {
            return RED;
          }
        });

    //format the text for each bubble, give it description
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["Department"]; })
        .style({
            "fill":"white",
            "font-family":"neuzeit-grotesk, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
})


function deptQuality() {

  // Get the data again
  d3.csv("data/Department_CourseQuality.csv", function(error, data){

      //convert numerical values from strings to numbers
      data = data.map(function(d){
        d.value = +Math.pow(d["Course Quality"], 6); //Raise to power to scale as difference is really small
        d.school = +d["School"];
        console.log(d.value);
        return d; });

    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles and color them correctly
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) {
          if (d.School == "SAS") {
            return BLUE;
          } else if (d.school == "SEAS"){
            return GREEN;
          } else if (d.School == "Wharton") {
            return ORANGE;
          } else {
            return RED;
          }
        });

    //format the text for each bubble, give it description
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["Department"]; })
        .style({
            "fill":"white",
            "font-family":"neuzeit-grotesk, Helvetica, Arial, san-serif",
            "font-size": "12px"
          });
  })
};


/**
 *
 * LANGUAGE COMPARISON CHART
 *
**/

c3.generate({
  bindto: '#lang-comp-chart',
    data: {
        columns: [
            ['Average Course Quality', 3.953, 3.816666667, 3.564379426, 3.47, 3.457692308, 3.434880508, 3.419102564, 3.413688504, 3.4016788, 3.395666667, 3.366282051, 3.328333333, 3.28125, 3.269122405, 3.25000891, 3.210933558, 3.207371795, 3.183807692, 3.18375, 3.164480456, 3.148846855, 3.116055509, 3.091730769, 3.075000364, 3.059285996, 2.987975323, 2.964070149, 2.833305371, 2.805909091, 2.62323814,4],
            ['Average Instructor Quality', 3.257806803, 3.8675, 3.722307082, 3.44,3.506923077, 3.642147819, 3.586346154, 3.598342373, 3.536174915, 000,3.631538462, 3.556333333, 3.40375, 3.472466422, 3.50907218, 3.388827812, 3.299871795, 3.415785714, 3.3875, 3.3696656, 3.432141415, 3.393812137, 3.33724359, 3.407779419, 3.340734855, 3.196735098, 3.165453381, 3.079332997, 3.025, 2.891421124, 4]
        ],
        type: 'bar'
    },
    axis: {
      x: {
        label: 'Language',
        type: 'category',
        categories:['TURK', 	'YDSH', 	'PRTG', 	'SCND', 	'PERS', 	'CHIN', 	'GREK', 	'HEBR', 	'JPAN', 	'GUJR', 	'SKRT', 	'DTCH', 	'ANEL', 	'KORN', 	'GRMN', 	'RUSS', 	'URDU', 	'LATN', 	'ROML', 	'JWST', 	'ITAL', 	'FREN', 	'HIND', 	'SPAN', 	'ARAB', 	'SAST', 	'AFRC', 	'AFST', 	'SLAV', 	'EAS', 	'Avg']
      }
    },
    legend: {
        position: 'right'
    }

});

/**
 *
 * GREAT DEPRESSION CHART
 *
**/
c3.generate({
  bindto: '#drop-chart',
  data: {
    url: 'data/drop-data.csv'
  },
  axis: {
    x: {
      label: 'Semester',
      type: 'category',
      categories:["S09", "F09", "S10", "F10", "S11", "F11", "S12", "F12", "S13", "F13", "S14", "F14", "S15"]
    },
    y: {
      label: 'Score',
      min: 2.3,
      max: 3.3
    }
  },
  legend: {
      position: 'right'
  },
  regions: [
          {axis: 'x', start: 13, end: 14},
      ]
  }
);

/**
 *
 * INITIALIZATION FUNCTIONS
 *
**/
$( document ).ready(function(){
  avgSAS();
  sectQual();
  stemQual();
})
