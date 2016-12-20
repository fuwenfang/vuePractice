<template>
    <div class="mbox_BombBox">
        <div class="mbox784">
            <div class="mbox_filter clearfix">
                <h6>按负责人筛选</h6>
                <div class="mbox_filter_close01"></div>
            </div>
            <div class="mbox784_textwrap">
                <input id="textarea1" class="M01text" v-model = 'textValue' v-on:keyup.enter = 'handleInput'/>
                <p class = 'dev-tags'>
                    <span class="nameSpan" v-for='(p,index) in showPerson'>
                        <span>{{p.ID}}</span>
                        <a class="tagClose" v-on:click = 'removeItem(p.ID)'>x</a>
                    </span>
                </p>
            </div>
            <div class="mbox_BombBoxList01">
                <ul class="clearfix m_list02">
                    <li  v-for='(p,index) in person' key = {{p.ID}} v-on:click = 'handleClickItem(index)'>
                        <a href="#" target="_blank"><img src={p.Avatar} width="60" height="60" /></a>
                        <h5>{{p.Name}}</h5>
                        <div class="zhiwei">
                            <a href="#" target="_blank">{{p.Dept}}</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="m_btn01 clearfix">
                <div class="m_btn01L">确  定</div>
                <div class="m_btn01R">取  消</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  ready: function () {
    // this.$http.get('/someUrl', {params}).then(successCallback, errorCallback)
    // this.$http.post('/someUrl', {params}).then(successCallback, errorCallback)
  },
  methods: {
    handleClickItem: function (index) {
      this.showPerson = []
      this.showPerson.push({
        ID: this.person[index].ID,
        Name: this.person[index].Name
      })
    },
    removeItem: function (ID) {
      let newShowPerson = this.showPerson.filter((item, i) => {
        return item.ID !== ID
      })
      this.showPerson = newShowPerson
    },
    handleInput: function () {
      // GET /someUrl
      this.$http.get('static/search.json').then((response) => {
        // success callback
        this.person = [{
          ID: '1520291',
          Name: '付文芳',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        }]
      }, (response) => {
        // error callback
      })
    }
  },
  data () {
    return {
      textValue: '',
      showPerson: [],
      person: [
        {
          ID: '152029',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520291',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520292',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520293',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520294',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520295',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        },
        {
          ID: '1520296',
          Name: '\u960e\u7ffc',
          Dept: '\u540e\u53f0\u5f00\u53d1\u90e8',
          Avatar: 'http://test.staticoss.upesn.com/1/2253/201605/25/146416176623157a75a2112b21c9eacf9d520ed912.jpg.thumb.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, p, blockquote, th, td {
  margin:0;
  padding:0;
}
body {
  font-size:12px;
  font-family:simsun, arial, helvetica, clean, sans-serif;
  background:#fff;
  color:#2b2b2b;
}
.clear {
  clear:both;
}
.clearfix:after {
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

/*筛选弹出框begin*/

.mbox_BombBox{ background:#fff; width:860px; margin:10px auto;}
.mbox784{ width:820px; margin:0 auto; padding:20px 0px;}
.mbox_BombBoxList01{width:810px;border: 1px solid #dcdcdc;padding-left: 10px;padding-top: 10px;}
.m_list02{ width:793px; }
.m_list02 li{ width:188px; height:62px; border:1px solid #efefef; float:left; margin-right:8px; margin-bottom:8px;}
.m_list02 li img{ float:left; display:block; width:60px; height:60px; margin-right:13px; padding-top:1px; padding-left:1px; padding-bottom:1px;}
.m_list02 li h6{ font-size:14px;font-family:Microsoft YaHei; font-weight:normal; padding-top:16px;}
.m_list02 li h5{ font-size:14px;font-family:Microsoft YaHei; font-weight:normal; padding-top:5px;}
.zhiwei{ font-size:12px;font-family:Microsoft YaHei; color:#666; padding-top:12px;}
.zhiwei a{ color:#666;}
.zhiwei span{ padding: 0 5px;}

.m_btn01{ width:258px; margin-top:12px; margin-left:575px;}
.m_btn01L{ float:left;margin: 0 10px;background: #1eb8bb;border-radius: 3px;padding: 0 38px;line-height:32px;border: none;
cursor: pointer;vertical-align: middle;display: inline-block; color:#fff; font-size:14px;font-family:Microsoft YaHei;}
.m_btn01R{ float:right;margin: 0 10px;background: #e6e6e6;border-radius: 3px;padding: 0 38px;line-height:32px;border: none;
cursor: pointer;vertical-align: middle;display: inline-block; color:#a4a4a4; font-size:14px;font-family:Microsoft YaHei;}

.mbox_filter{ margin-bottom:10px; width:820px;}
.mbox_filter h6 { font-size:14px;float:left; font-weight:normal;}
.mbox_filter_close01{ float:right; cursor:pointer; width:9px; height:11px;}

.mbox784_textwrap{ width:820px; height:30px; margin-bottom:10px;}
.M01text{width:820px;height:28px;line-height:28px;padding:0px;border-radius: 3px;border: 1px solid #dcdcdc;}
.dev-tags {
    width: 820px;
    height: 14px;
    cursor: text;
    padding: 8px;
    margin-top: -31px;
}
.nameSpan {
    border: 1px solid #666;
    padding: 2px;
    margin-right: 3px;
    background-color: #e5e5e5;
    font-size: 12px;
    border-radius: 2px;
    cursor: pointer;
}
.nameSpan .tagClose {
    width: 11px;
    height: 11px;
    display: inline-block;
}
/*筛选弹出框end*/
</style>
