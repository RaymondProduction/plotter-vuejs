    var app = new Vue({
      el: '#app',
      data() {
        return {
          data: [1, 2, 3, 4, 5, 6, 7, 8],
          formula: 'let A = Math.pow(2,x);\np = ((A-1)/A)*100;\nreturn p',
          start:0,
          end: 10,
          step: 1,
          nameY: 'Y',
          nameX: 'X',
          max: 100,
          min: 0,
        }
      },

      methods: {
        f() {
          console.log('ok');
          console.log(this.formula);
          var y = new Function('x', this.formula);
          this.data = [];
          for (let x=this.start; x<this.end; x+=this.step) this.data.push(y(x));
          this.plot(this.data);
        },
        plot(data){
          Highcharts.chart('container', {

            title: {
              text: 'Graph'
            },
            yAxis: {
              max: this.max,
              min: this.min,
              title: {
                text: this.nameY,
              }
            },

            plotOptions: {
              series: {
                label: {
                  connectorAllowed: false
                },
                pointStart: this.start
              }
            },
            series: [{
              name: this.nameX,
              data: data,
            }],

          });
        }
      },
      created() {
        this.plot(this.data);
      },
    })
