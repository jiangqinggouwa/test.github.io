# <p align="center">web学习</p> #

>##HTML表单

表单是用户与应用程序或者web站点之间的交互

>###表单及控件###


>>**form 表单**

常用属性

- <font color="aqud">action:</font>指的是表单的地址
- <font color="aqud">method:</font>提交给HTTP的方法是get和post

>>**fieldset  组合表单**

lenged（解释说明用的)是fieldset的一个小组件，意思是解释的信息

>>**input  输入框**

通用属性

- <font color="aqud">autofocus:</font>   布尔类型，默认是自动获取焦点
- <font color="aqud">disabled:</font>     布尔类型，默认是不能与用户进行交互
- <font color="aqud">name:</font>   表单提交的时候一起提交的
- <font color="aqud">value:</font> 表单默认值，和placeholder差不多，button类型时常会用到
- <font color="aqud">text: 选择类型</font>

类型  

text，password，mail,tel,search,radio,checkbox,,hidden，url ，<font color='orange'>date,datetime,month,year,time,range,number,file,image,progress </font>
- radio 属性checked默认选中
- checkBox 属性checked默认选中  
- range 属性 min,max,value.  
- number 属性 min,max,step,value  
- file  文件选择器允许上传多个文件   
- url  该类型添加了特殊的约束可能会有自动验证
- hidden 隐藏文本框
  例子：这里请求的是图形文件  
```
    <input type="file" name="file" id="file" accept="image/*" multiple>  
```  
- image 属性 src和img标签基本一样   

>>**button  按钮**  

类型
submit、reset、anonymous

>>**texterea 文本框**

例子

    <textarea rols='10' cols='20'></textarea>  

>>**select  下拉框** 

属性 multiple:可以添加多个值但要借助快捷键

>>>**optgroup  选择框组**

例子  

<select multiple id="select">
      <optgroup label='number'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </optgroup>
      <optgroup label='a-z'>
        <option value='a'>1</option>
        <option value='b'>2</option>
        <option value='c'>3</option>
      </optgroup>
    </select>

    <label for="select">下拉菜单</label>
    <select multiple id="select">
      <optgroup label='number'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </optgroup>
      <optgroup label='a-z'>
        <option value='a'>1</option>
        <option value='b'>2</option>
        <option value='c'>3</option>
      </optgroup>
    </select>  


与之很类似的是使用datalist标签(**自动补全输入框**)但要满足IE10以上的版本  <font color='aqua'>利用list属性将数据绑定input上</font>  
        

    <input list="select">下拉菜单</label>
    <datalist id="select">
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
    </datalist>  

>>**progress   进度条**  

例子：<progress min='10' max='100' value='75'>75/100</progress>

    <progress min='10' max='100' value='75'>75/100</progress>

>>**meter  仪表**

例子
 <meter min="1" max="100" value="75" low="33" heigh="66" optimum="40"></meter>
    
     <meter min="1" max="100" value="75" low="33" heigh="66" optimum="40"></meter>

>###表单验证

当今所有服务端框架都提供了科数据校验与清洗功能


>>**客服端校验**

**parttern  正则校验**
- |或运算符
- []匹配一个字符
- ^非运算符
- +可以多个字符一起校验
- [a-z]小写字母匹配
- [A-Z]大写字母匹配
- [A-Za-z]大小写匹配
- {3}数字匹配

属性required 属性校验
css样式中 valid 和 invalid验证有效无效的聚焦样式