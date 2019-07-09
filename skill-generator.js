var order = ["photography","robotics","web-development","graphic-design","programming","game-development","3d-modeling","music","filmmaking","writing","drawing","animation","new-media","motion-graphics", "learning-lab"];
var classes = ["", ".border","",".border",".color", ".color.border"];
var res = "";

for(var i = 0; i < order.length; ++i)
{
  if(order[i] != "learning-lab")
  {
    var skill = shavigh.skills[order[i]];
  }
  else
  {
    var skill =
    {
      "csstag"    : "learning-lab"
    };
  }

  for(var j = 0; j < classes.length; ++j)
  {
    var pre = "";
    if(j > 1 && j < 4)
    {
      pre = "*[disabled] ";
    }

    res += pre + ".icon." + skill.csstag + (classes[j]) + "\n{\n";
    res += "  " + "background-position-x: "  + (-196 * i) + "px" + ";\n";
    res += "  " + "background-position-y: "  + (-196 * j) + "px" + ";\n";
    res += "}\n";
  }
}

console.log(res);
