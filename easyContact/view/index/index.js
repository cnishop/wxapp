Page({
  data: {
    thisYear:new Date().getFullYear(),
    contactData: [
      {
        id: '1',
        name: '王鑫',
        phone: '18212345678',
        birthday: '1990'
      },
      {
        id: '2',
        name: '李梅',
        phone: '18635478952',
        birthday: '1990'
      },
      {
        id: '3',
        name: '马云',
        phone: '13915484569',
        birthday: '1971'
      },
      {
        id: '4',
        name: '冰冰',
        phone: '18645271258',
        birthday: '1984'
      },
      {
        id: '5',
        name: '大史',
        phone: '15015488962',
        birthday: '1977'
      },
      {
        id: '6',
        name: '卫宁',
        phone: '13815474568',
        birthday: '1988'
      },
      {
        id: '7',
        name: '小李',
        phone: '13652148212',
        birthday: '1987'
      },
    ]
  },
  deleteMe: function (e) {
    console.log(e.target.dataset.index)
    var newContactData = this.data.contactData
    var index = e.target.dataset.index   //e.currentTarget.dataset.index
    newContactData.splice(
      index,1
    )
    this.setData({
      contactData:newContactData

    })
  },

  addData:function(){
    var newContactData =this.data.contactData
    var newItem={
      id:newContactData.length +1,
      name:'新人',
      phone:'18600000000',
      birthday:'1970'
    }
    newContactData.push(newItem)
    this.setData({
      contactData:newContactData
    })
  },
  submitFun:function(e){
    console.log('提交了',e)
    var newContactData = this.data.contactData
    var newItem={
      id:newContactData.length+1,
      name:e.detail.value.name,
      phone:e.detail.value.phone,
      birthday:e.detail.value.birthday
    }
    newContactData.push(newItem)
    this.setData({
      contactData:newContactData
    })


  }



})