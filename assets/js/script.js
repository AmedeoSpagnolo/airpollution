$(document).ready(function(){

  // draw viz
  draw_viz("data/dataset.json")

  // draw monsters
  draw_monsters({random: false})

})

function draw_monsters(opt){
  for (var po in app.areas){
    var gas = d3.select(".monsters").append("div")
      .attr("class", po)
      .style("width", "750px")
      .style("height", "750px")
      .style("position", "relative")

    gas.append("p")
      .style("left", "50%")
      .style("top", "0")
      .style("margin", "0")
      .style("position", "absolute")
      .style("transform", "translateX(-50%)")
      .text(po.replace("_", " "))

    var monster_info = {
      target: "." + po,
      color: app.areas[po].color
    }
    if (!opt.random) {
      monster_info = $.extend({
        head: "illustrations/head_" + app.gas["NO2"].norm(app.areas[po].pollutant["NO2"]) + ".svg",
        left_arm: "illustrations/left_arm_" + app.gas["O3"].norm(app.areas[po].pollutant["O3"]) + ".svg",
        right_leg: "illustrations/right_arm_" + app.gas["SO2"].norm(app.areas[po].pollutant["SO2"]) + ".svg",
        left_leg: "illustrations/left_leg_" + app.gas["CO"].norm(app.areas[po].pollutant["CO"]) + ".svg",
        right_arm: "illustrations/right_leg_" + app.gas["PM10"].norm(app.areas[po].pollutant["RSP"]) + ".svg",
      },monster_info)
    }
    var creature = new Monster (monster_info)
    creature.init()
  }
}

function draw_viz(filename){
  d3.json("data/dataset.json", function(error, data) {
    if (error) throw error;
    var obj = {
      target: ".viz",
      gas: "O3",
      dataset: data,
      h: 300
    }
    var viz = new Viz (obj)
    viz.init()
  })
}
