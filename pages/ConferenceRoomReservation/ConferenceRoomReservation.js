const util = require('../../utils/util')
Page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    /* color: "black",
    bgcolor: "#ffffff", */
    tabs: [],
    activeTab: 0,
    box: "nihao",
    array: [{
      name: '上午8:00~12:00',
      data: [{
          time: '08:00~08:30',
          stst: false
        }, {
          time: '08:30~09:00',
          stst: false
        },
        {
          time: '09:00~09:30',
          stst: false
        }, {
          time: '09:30~10:00',
          stst: false
        }, {
          time: '10:00~10:30',
          stst: false
        }, {
          time: '10:30~11:00',
          stst: false
        }, {
          time: '11:00~11:30',
          stst: false
        }, {
          time: '11:30~12:00',
          stst: false
        },
      ],

    }, {
      name: '下午12:00~18:00',
      data: [{
          time: '12:00~12:30',
          stst: false
        }, {
          time: '12:30~13:00',
          stst: false
        },
        {
          time: '13:00~13:30',
          stst: false
        }, {
          time: '13:30~14:00',
          stst: false
        }, {
          time: '14:00~14:30',
          stst: false
        }, {
          time: '14:30~15:00',
          stst: false
        }, {
          time: '15:00~15:30',
          stst: false
        }, {
          time: '15:30~16:00',
          stst: false
        },
        {
          time: '16:00~16:30',
          stst: false
        }, {
          time: '16:30~17:00',
          stst: false
        }, {
          time: '17:00~17:30',
          stst: false
        }, {
          time: '17:30~18:00',
          stst: false
        }
      ],

    }, {
      name: '晚上18:00~22:00',
      data: [{
          time: '18:00~18:30',
          stst: false
        }, {
          time: '18:30~19:00',
          stst: false
        },
        {
          time: '19:00~19:30',
          stst: false
        }, {
          time: '19:30~20:00',
          stst: false
        }, {
          time: '20:00~20:30',
          stst: false
        }, {
          time: '20:30~21:00',
          stst: false
        }, {
          time: '21:00~21:30',
          stst: false
        }, {
          time: '21:30~22:00',
          stst: false
        },
      ],

    }]
  },
  /* 定义方法 */
  
  /* 点击事件判断状态 */
  tapName() {
    const arraybox = this.data.array
    console.log(arraybox)
    
  },
  /*  */
  onLoad() {
    const tabs = [{
        title: '09月23日'
      },
      {
        title: '09月24日'
      },
      {
        title: '09月25日'
      },
      {
        title: '09月26日'
      },
      {
        title: '09月27日'

      },
      {
        title: '09月28日'
      },
      {
        title: '09月29日'
      }
    ]
    this.setData({
      tabs
    })
    /* 获取时间 */
    const date = util.formatDate(new Date());
    this.setData({
      date: date
    })
   /* this.tapName() */

  },

  onTabClick(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },
  handleClick(e) {

  }
})