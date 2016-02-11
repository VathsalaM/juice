// var width = 960,
//     height = 500,
//     radius = Math.min(width, height) / 2;

// var color = d3.scale.ordinal()
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// var arc = d3.svg.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(0);

// var labelArc = d3.svg.arc()
//     .outerRadius(radius - 40)
//     .innerRadius(radius - 40);

// var pie = d3.layout.pie()
//     .sort(null)
//     .value(function(d) { return d.population; });

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// d3.json("juice_orders.json",function(error, jsonData) {
//   if (error) throw error;
//   var data = type(jsonData);
//   // console.log(data)
//   var convert = function(dataObject){
//     var dataArray = [];
//     var keys = Object.keys(dataObject);
//     for(var i in keys){
//       var x = {};
//       x[keys[i]] = dataObject[keys[i]];
//       // console.log(x);
//       dataArray.push(x);
//     }
//     return dataArray;
//   }

//   var x = convert(data);
//   console.log(x)
//   var g = svg.selectAll(".arc")
//       .data(pie(x))
//     .enter()
//     // .append("g")
//       // .attr("class", "arc");
//   // console.log(g)

//   g.append("path")
//       .attr("d", arc)
//       .style("fill", function(d) { return color(d.value); });

//   g.append("text")
//       .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
//       .attr("dy", ".35em")
//       .text(function(d) { return d.data.age; });
// });

// var data = {};

// function type(d) {
//   var data = {};
//   for(var i in d){
//     if(!data[d[i].drinkName])
//       data[d[i].drinkName] = [d[i].employeeId]
//     else
//       data[d[i].drinkName].push(d[i].employeeId);
//   }
//   // console.log(data);
//   return data;
// }


