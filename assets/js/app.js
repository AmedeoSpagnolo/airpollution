var app = {}
app.monsters = {}
app.gas = {}
app.areas = {}

var norm_scale = [0,1,2,3]
var color_scale = ["#79bc6a", "#bbcf4c", "#ffcf00", "#ff9a00", "#ff0000",  "#1c0909"]

var scalenorm = {
  "NO2":  [0,40,80,180,280,400],
  "O3":   [0,50,100,168,208,748],
  "SO2":  [0,40,80,380,800,1600],
  "CO":   [0,1,2,10,17,34],
  "PM10": [0,50,100,250,350,430],
  "PM25": [0,30,60,90,120,250],
}

app.gas = {
  "NO2": {
    scale: scalenorm["NO2"],
    norm: d3.scaleQuantize().domain(scalenorm["NO2"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["NO2"]).range(color_scale),
  },
  "O3": {
    scale: scalenorm["O3"],
    norm: d3.scaleQuantize().domain(scalenorm["O3"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["O3"]).range(color_scale),
  },
  "SO2": {
    scale: scalenorm["SO2"],
    norm: d3.scaleQuantize().domain(scalenorm["SO2"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["SO2"]).range(color_scale),
  },
  "CO": {
    scale: scalenorm["CO"],
    norm: d3.scaleQuantize().domain(scalenorm["CO"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["CO"]).range(color_scale),
  },
  "PM10": {
    scale: scalenorm["PM10"],
    norm: d3.scaleQuantize().domain(scalenorm["PM10"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["PM10"]).range(color_scale),
  },
  "PM25": {
    scale: scalenorm["PM25"],
    norm: d3.scaleQuantize().domain(scalenorm["PM25"]).range(norm_scale),
    norm_color: d3.scaleLinear().domain(scalenorm["PM25"]).range(color_scale),
  }
}

app.areas = {
  "causeway_bay": {
    color: "#96ceb4",
    pollutant: {
      CO: 92.1212962963,
      FSP: 37.287037037,
      NO2: 94.0027777778,
      NOX: 240.12037037,
      O3: 24.675462963,
      RSP: 53.6814814815,
      SO2: 8.42731481481,
    }
  },
  "central": {
    color: "#ffeead",
    pollutant: {
      CO: 96.5490740741,
      FSP: 27.4583333333,
      NO2: 86.1212962963,
      NOX: 176.660648148,
      O3: 33.6689814815,
      RSP: 43.2050925926,
      SO2: 5.41851851852,
    }
  },
  "eastern": {
    color: "#ffcc5c",
    pollutant: {
      CO: 0,
      FSP: 26.2365740741,
      NO2: 50.4643518519,
      NOX: 0,
      O3: 63.9143518519,
      RSP: 41.2324074074,
      SO2: 3.74861111111,
    }
  },
  "kwai_chung": {
    color: "#ff6f69",
    pollutant: {
      CO: 0,
      FSP: 25.0416666667,
      NO2: 57.6171296296,
      NOX: 91.5518518519,
      O3: 47.8518518519,
      RSP: 36.3587962963,
      SO2: 6.13148148148,
    }
  },
  "kwun_tong": {
    color: "#5b9aa0",
    pollutant: {
      CO: 0,
      FSP: 27.6625,
      NO2: 38.4685185185,
      NOX: 57.7805555556,
      O3: 54.4708333333,
      RSP: 45.062962963,
      SO2: 5.83333333333,
    }
  },
  "mong_kok": {
    color: "#622569",
    pollutant: {
      CO: 90.925,
      FSP: 33.3962962963,
      NO2: 86.2523148148,
      NOX: 159.162037037,
      O3: 26.5189814815,
      RSP: 46.750462963,
      SO2: 3.79074074074,
    }
  },
  "sha_tin": {
    color: "#674d3c",
    pollutant: {
      CO: 0,
      FSP: 20.1453703704,
      NO2: 34.1212962963,
      NOX: 48.7532407407,
      O3: 62.3115740741,
      RSP: 28.5175925926,
      SO2: 6.74074074074,
    }
  },
  "sham_shui_po": {
    color: "#8d9db6",
    pollutant: {
      CO: 0,
      FSP: 26.4310185185,
      NO2: 63.4027777778,
      NOX: 90.0611111111,
      O3: 43.3106481481,
      RSP: 40.0305555556,
      SO2: 7.50324074074,
    }
  },
  "tai_po": {
    color: "#667292",
    pollutant: {
      CO: 0,
      FSP: 28.4064814815,
      NO2: 39.6736111111,
      NOX: 54.2296296296,
      O3: 61.862037037,
      RSP: 40.7550925926,
      SO2: 3.48981481481,
    }
  },
  "tap_mun": {
    color: "#686256",
    pollutant: {
      CO: 75.5884259259,
      FSP: 24.8861111111,
      NO2: 11.6222222222,
      NOX: 14.4736111111,
      O3: 79.8277777778,
      RSP: 41.3546296296,
      SO2: 10.6532407407,
    }
  },
  "tseung_kwan_o": {
    color: "#c1502e",
    pollutant: {
      CO: 81.3365740741,
      FSP: 23.15,
      NO2: 24.6347222222,
      NOX: 32.7013888889,
      O3: 76.299537037,
      RSP: 36.149537037,
      SO2: 7.23101851852,
    }
  },
  "tsuen_wan": {
    color: "#587e76",
    pollutant: {
      CO: 69.1680555556,
      FSP: 28.7324074074,
      NO2: 38.8986111111,
      NOX: 57.5782407407,
      O3: 43.3097222222,
      RSP: 45.1726851852,
      SO2: 9.87407407407,
    }
  },
  "yuen_long": {
    color: "#a96e5b",
    pollutant: {
      CO: 70.8643518519,
      FSP: 25.5842592593,
      NO2: 46.7467592593,
      NOX: 67.0810185185,
      O3: 44.8259259259,
      RSP: 49.2393518519,
      SO2: 9.09722222222,
    }
  },
  "tuen_mun": {
    color: "#3b3a30",
    pollutant: {
      CO: 89.3777777778,
      FSP: 35.3435185185,
      NO2: 52.3462962963,
      NOX: 82.5111111111,
      O3: 38.9300925926,
      RSP: 52.6282407407,
      SO2: 6.05925925926,
    }
  },
  "tung_chung": {
    color: "#d96459",
    pollutant: {
      CO: 89.3777777778,
      FSP: 35.3435185185,
      NO2: 52.3462962963,
      NOX: 82.5111111111,
      O3: 38.9300925926,
      RSP: 52.6282407407,
      SO2: 6.059259259,
    }
  }
}
