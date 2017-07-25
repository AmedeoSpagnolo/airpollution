class Monster {
  constructor(options = {}) {
    this.opt = $.extend({
      target: "body",
      head: "illustrations/head_" + Math.floor(Math.random()*[0,1,2,3].length) + ".svg",
      left_arm: "illustrations/left_arm_" + Math.floor(Math.random()*[0,1,2,3].length) + ".svg",
      right_arm: "illustrations/right_arm_" + Math.floor(Math.random()*[0,1,2,3].length) + ".svg",
      left_leg: "illustrations/left_leg_" + Math.floor(Math.random()*[0,1,2,3].length) + ".svg",
      right_leg: "illustrations/right_leg_" + Math.floor(Math.random()*[0,1,2,3].length) + ".svg",
      color: "gray",
    }, options)
  }

  load_monster_svg(path, zindex = 0){
    var vm = this.opt
    $.get(path, function(data_svg) {
      var div = document.createElement("div")
      div.className = path.split("/")[1].split(".")[0] + " absolut " + "zi" + zindex
      var temp = new XMLSerializer().serializeToString(data_svg.documentElement);
      var colour_temp = temp.replace(/#47A49B/g, vm.color)
      div.innerHTML = colour_temp
      $(vm.target).append(div)
    });
  }

  init(){
    var vm = this.opt
    this.load_monster_svg(vm.head, 3)
    this.load_monster_svg(vm.right_arm, 2)
    this.load_monster_svg(vm.left_arm, 2)
    this.load_monster_svg(vm.right_leg, 1)
    this.load_monster_svg(vm.left_leg, 1)
  }
}
