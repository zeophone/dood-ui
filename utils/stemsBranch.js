var stemsBranch = {
    thisTable : [
    "甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉",
    "甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未",
    "甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳",
    "甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯",
    "甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑",
    "甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"],
    MonthStemsTable : [
      ["丙","丁","戊","己","庚","辛","壬","癸","甲","乙","丙","丁"],
      ["戊","己","庚","辛","壬","癸","甲","乙","丙","丁","戊","己"],
      ["庚","辛","壬","癸","甲","乙","丙","丁","戊","己","庚","辛"],
      ["壬","癸","甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],
      ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸","甲","乙"]
    ],
    // 1 月到 12月
    MonthBranchTable : ["寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"],
  
    // 12生肖
    AnimalTable :      ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],
  
    HourStemsTable : [
      ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸","甲","乙"],
      ["丙","丁","戊","己","庚","辛","壬","癸","甲","乙","丙","丁"],
      ["戊","己","庚","辛","壬","癸","甲","乙","丙","丁","戊","己"],
      ["庚","辛","壬","癸","甲","乙","丙","丁","戊","己","庚","辛"],
      ["壬","癸","甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]],
  
    HourBranchTable : ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],
    HourBranchDetail : [["子时","(23点-01点)"],["丑时","(01点-03点)"],["寅时","(03点-05点)"],["卯时","(05点-07点)"],["辰时","(07点-09点)"],["巳时","(09点-11点)"],["午时","(11点-13点)"],["未时","(13点-15点)"],["申时","(15点-17点)"],["酉时","(17点-19点)"],["戌时","(19点-21点)"],["亥时","(21点-23点)"]],
  
    // 天干五行
    StemsTable :         ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],
    StemsElementTable :  ["木","木","火","火","土","土","金","金","水","水"],
    BranchTable:         ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],
    BranchElementTable : ["水","土","木","木","土","火","火","土","金","金","土","水"],
  
    getHourStems: function(day, hour){
      var dIndex = this.StemsTable.indexOf(day);
      var hIndex = parseInt((parseInt(hour) + 1)/2) % 12;
      return this.HourStemsTable[dIndex % 5][hIndex];
    },
    getHourBranch: function(hour){
      var hIndex = parseInt((parseInt(hour) + 1)/2) % 12;
      return this.HourBranchTable[hIndex];
    },
    getHourDetail: function(hour) {
      var hIndex = parseInt((parseInt(hour) + 1)/2) % 12;
      return this.HourBranchDetail[hIndex];
    },
    getStemsElement: function(stems) {
      return this.StemsElementTable[this.StemsTable.indexOf(stems)];
    },
  
    getBranchElement: function(branch) {
      return this.BranchElementTable[this.BranchTable.indexOf(branch)];
    },
  
    getStemsBranchElement: function(str) {
        return this.getStemsElement(str.charAt(0)) + '' + this.getBranchElement(str.charAt(1));
    },
    getAnimal: function(str) {
      return this.AnimalTable[this.BranchTable.indexOf(this.charAt(1))];
    },
    version: '1.1'
  }

  module.exports = stemsBranch;