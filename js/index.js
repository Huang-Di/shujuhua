; (function () {
    $('.monitor .tabs').on('click', 'a', function () {
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active')
        $('.monitor .content')
            .eq($(this).index())
            .show()
            .siblings('.content').hide()
    })
})()
    // 点位分布统计
    ; (function () {
        //实例化对象
        let myChart = echarts.init(document.querySelector('.pie'))
        // 指定配置和数据
        let option = {
            color: [
                '#006cff',
                '#60cda0',
                '#ed8884',
                '#ff9f7f',
                '#0096ff',
                '#9fe6b8',
                '#32c5e9',
                '#1d9dff'
            ],
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: ['10%', '80%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    data: [
                        { value: 10, name: '湖南' },
                        { value: 5, name: '湖北' },
                        { value: 15, name: '山东' },
                        { value: 25, name: '陕西' },
                        { value: 20, name: '云南' },
                        { value: 35, name: '湖南' },
                        { value: 30, name: '上海' },
                        { value: 40, name: '北京' }
                    ],
                    label: {
                        fontSize: 14
                    },
                    labelLine: {
                        length: 6,
                        length2: 8
                    }
                }
            ]
        };
        // 配置项和数据给我们得实例化对象
        myChart.setOption(option)
        // 图表与浏览器等比例缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    })()

    // 柱状图分布
    ; (function () {
        let item =  {
            name: '',
            value: 1200,
            // 修改当前柱子得样子
            itemStyle: {
                color: '#254065'
            },
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            }
        };
    
        // 实例化对象
        let myChart = echarts.init(document.querySelector('.bar'))
        // 指定配置和数据
        let option = {
            tooltip: {
                trigger: 'item',
                //   axisPointer: {
                //     type: 'shadow'
                //   }
                show:false
            },
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '3%',
                containLabel: true,
                show: true,
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [
                        '上海',
                        '广州', 
                        '北京', 
                        '深圳', 
                        '合肥', 
                        '', 
                        '......',
                         '', 
                         '杭州', 
                         '厦门', 
                         '济南', 
                         '成都', 
                         '重庆'],
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        },
                        
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '用户统计',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        2100, 
                        1900, 
                        1700, 
                        1560, 
                        1400, 
                        item,
                        item,
                        item,
                        900, 
                        750, 
                        600, 
                        480, 
                        240]
                }
            ]
        };
        // 吧配置给实例化对象
        myChart.setOption(option)
        // 等比例缩放图表
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    })()
    
    // 销售折线图分布
    ;(function() {
   // 准备数据
        let data = {
            year: [
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
              [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
              [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
              [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
              [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
              [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
              [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
          }
        let myChart = echarts.init(document.querySelector('.line'))
        let option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              right:'10%',
              textStyle: {
              color:'#4c9bfd'
              },
            //   data: ['Email', 'Union Ads']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '20%',
              show: true,
              borderColor:'#012f4a',
              containLabel: true
            },
          
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisTick: {
                  show:false  //除去刻度
              },
              axisLabel: {
                  color:'#4c9bfd' //文本颜色
              },
              axisLine: {
                  show: false //去除轴线
              },
              boundaryGap: false //去除周内间距
            },
            yAxis: {
              type: 'value',
              axisTick: {
                  show: false //去除刻度
              },
              axisLabel: {
                  color:'#4c9bfd' //文字颜色
              },
              splitLine: {
                  lineStyle: {
                      color: '#012f4a' //分割线颜色
                  }
              }

            },
            series: [
              {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                // 线条得圆滑
                smooth:true
              },
              {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth:true
              },
              
            ]
          };
          myChart.setOption(option)
        //   tab切换
        
       $('.sales .caption').on('click', 'a', function() {
        //  此时要注意这个索引号得问题 
         index = $(this).index() - 1
          $(this)
           .addClass('active')
           .siblings('a')
           .removeClass('active')
        //  拿到当前a得自定义属性值
        // console.log(this.dataset.type);
        // 根据呐到得值找到数据
        // console.log(data['year']);
        //  console.log(data[this.dataset.type]);
         let arr = data[this.dataset.type]  //arr 拿到一个二维数组
        // console.log(arr);
        // 根据呐到数据重新渲染 series里面得data值 
        option.series[0].data = arr[0]
        option.series[1].data = arr[1]
        // 重新把配置好得新数据给实例对象
        myChart.setOption(option)
       })
    //    开启定时器
      let as = $('.sales .caption a')
      let index = 0
       let timer = setInterval(() => {
           index++
           if (index >= as.length) index = 0;
           as.eq(index).click()
       }, 1000);
    // 鼠标经过sales 关闭 离开开启
       $('.sales').hover(
           function() {
               clearInterval(timer)
           },
           function() {
               clearInterval(timer)
               timer = setInterval(() => {
                   index++
                   if (index >= as.length) index = 0
                   as.eq(index).click()
               }, 1000);
           }
       )
       //    自适应
       window.addEventListener('resize', function () {
        myChart.resize()
    })
    })()
    
    // 雷达图
    ;(function() {
        let myChart = echarts.init(document.querySelector('.radar'))
        
          
          let lineStyle = {
            color:'#fff',
            width: 1,
            opacity: 0.5
          };
          let option = {
           tooltip: {
               show:true,
               position: ['60%', '10%']
           },
           radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
         ],
            //   修改雷达图得大小
              radius:'60%',
              shape: 'circle',
            //   分割得圆圈个数
              splitNumber: 4,
              axisName: {
                color: '#4c9bfd'
              },
              //   分割得圆圈线条得样式
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255, 0.5)'
                }
              },
              splitArea: {
                show: false
              },
            //   坐标轴得线
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              }
            },
            series: [
              {
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data:  [[90, 19, 56, 11, 34]],
                // 设置圆形标记（拐点）
                symbol: 'circle',
                // 设置几个圆点
                symbolSize: 5,
                // 圆点得样子
                itemStyle: {
                  color: '#fff'
                },
                // 小圆点显示数据
                label: {
                    show:true,
                    fontSize:10
                },
                areaStyle: {
                  color:'rgba(238, 197, 102, 0.6)'
                }
              }
            
              
            ]
          };
          myChart.setOption(option)
    })()

    // 并行半圆图
    ;(function() {
        let myChart = echarts.init(document.querySelector('.gauge'))
        let option = {

  
            series: [
              {
                name: '销售进度',
                type: 'pie',
                radius: ['130%', '150%'],
                center: ['48%', '80%'],
                 labelLine: {
                  show: false
                },
                // 饼形图得起始角度180.
                startAngle: 180,
                // 鼠标经过不变大
                hoverOffset: 0,
                data: [
                  { value: 100, 
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                          0,
                          0,
                          0,
                          1,
                          [
                            { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                            { offset: 1, color: "#005fc1" } // 1 结束颜色
                          ]
                        )
                      } },
                  { value: 100,  itemStyle: {
                      color:'#12274d'
                  }},
                  { value: 200,  itemStyle: {
                      color:'transparent'
                  }},
                  
                 
                ]
              }
            ]
          };
          myChart.setOption(option)
    })()

    // 全国热榜模块
    ;(function() {
        // 准备数据
        let hotData = [
            {
              city: '北京',  // 城市
              sales: '25, 179',  // 销售额
              flag: true, //  上升还是下降
              brands: [   //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
              ]
            },
            {
              city: '河北',
              sales: '23,252',
              flag: false,
              brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
              ]
            },
            {
              city: '上海',
              sales: '20,760',
              flag: true,
              brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
              ]
            },
            {
              city: '江苏',
              sales: '23,252',
              flag: false,
              brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
              ]
            },
             {
              city: '山东',
              sales: '20,760',
              flag: true,
              brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
              ]
            }
          ];
        //   根据数据渲染
        // （1）遍历hotData对象
        let supHTML = ''
        $.each(hotData, function (index, item) {
            supHTML += `
            <li>
                  <span>${item.city}</span>
                  <span>${item.sales} <s class="
                  ${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
                </li>`
            })
            $('.sup').html(supHTML)
            // 鼠标进入小li要高亮
            $('.province .sup').on('mouseenter', 'li', function() {
                
                $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                // 拿到当前对应得索引号
                // console.log($(this).index());
                // 找当前对应得索引号里边得数值
                // console.log(hotData[$(this).index()].brands);
                // 开始遍历数值里得数组
                let subHTML = ''
                $.each(hotData[$(this).index()].brands, function(index, item) {
                    // 对应城市得每一个品牌对象
                    // console.log(item);
                    subHTML+= `  <li><span>${item.name}</span>${item.num}<span> <s class="
                    ${item.flag ? 'icon-up' : 'icon-down'}"></s></span></li> `
                })
               $('.sub').html(subHTML)
            })
            // 默认把第一个li处于鼠标经过状态
            let lis = $('.province .sup li')
            lis.eq(0).mouseenter()
            // 开启定时器
            let index = 0
           let timer = setInterval(function(){
                index++
                if(index >= 5) index = 0
                // lis.eq(index).mouseenter()
                lis
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
                // 拿到当前对应得索引号
                // console.log($(this).index());
                // 找当前对应得索引号里边得数值
                // console.log(hotData[$(this).index()].brands);
                // 开始遍历数值里得数组
                let subHTML = ''
                $.each(hotData[index].brands, function(index, item) {
                    // 对应城市得每一个品牌对象
                    // console.log(item);
                    subHTML+= `  <li><span>${item.name}</span>${item.num}<span> <s class="
                    ${item.flag ? 'icon-up' : 'icon-down'}"></s></span></li> `
                })
               $('.sub').html(subHTML)
            }, 2000)

            $('.province .sup').hover(
                function() {
                    clearInterval(timer)
                },
                function() {
                    clearInterval(timer)
                    timer = setInterval(function(){
                        index++
                        if(index >= 5) index = 0
                        // lis.eq(index).mouseenter()
                        lis
                .eq(index)
                .addClass('active')
                .siblings()
                .removeClass('active')
                // 拿到当前对应得索引号
                // console.log($(this).index());
                // 找当前对应得索引号里边得数值
                // console.log(hotData[$(this).index()].brands);
                // 开始遍历数值里得数组
                let subHTML = ''
                $.each(hotData[index].brands, function(index, item) {
                    // 对应城市得每一个品牌对象
                    // console.log(item);
                    subHTML+= `  <li><span>${item.name}</span>${item.num}<span> <s class="
                    ${item.flag ? 'icon-up' : 'icon-down'}"></s></span></li> `
                })
               $('.sub').html(subHTML)
                    }, 2000)
                }
            )
    })()