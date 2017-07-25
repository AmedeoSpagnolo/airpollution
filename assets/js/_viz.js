class Viz {
  constructor(options = {}) {
    this.opt = $.extend({
      target: "body",
      bgcolor: "gray",
      w: $(document).width(),
      h: 400,
      gas: "O3",
      dataset: {}
    }, options)
  }

  init(){
    function get_gas_value(gs, zone){
      var temp = []
      vm.dataset[zone].forEach(function(i){
        i[gs] != "N.A." ? temp.push(parseInt(i["CO"],10)) : temp.push(null)
      })
      return temp
    }
    var vm = this.opt
    var viz = d3.select(vm.target).append("svg")
      .attr("class", "svg")
      .attr("width", vm.w)
      .attr("height", vm.h)
      .style("background-color", vm.bgcolor);

    var zones = Object.keys(app.areas)
    zones.forEach(function(el,index){
      var gas = get_gas_value(vm.gas,el)

      var line = viz.append("g")
        .attr("class", function(){return vm.gas+"__"+el})

      line.selectAll("rect")
        .data(gas).enter()
        .append("rect")
        .attr("x", function(d,i){ return vm.w/gas.length*i})
        .attr("y", function(d,i){ return vm.h/zones.length*index})
        .attr("width", function(d){ return vm.w/gas.length})
        .attr("height", function(d,i){ return vm.h/zones.length})
        .style("fill", function(d){ return app.gas[vm.gas].norm_color(d) })
        .style("opacity", 1)
    })
  }
}
