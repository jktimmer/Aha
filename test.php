<?php
//设置中文编码 
header('content-type:text/html;charset=utf-8');
//变量和js的区别 js:var, php:$,
 $tr = '你好!';
 echo $tr;
 //换行<br>
 echo "<br>";
//php拼接字符串用.
 $fg = 'my';
 $gh = 'book';
 echo $fg.$gh.'<br>';
//数组操作
 $ary = array('西瓜', '苹果', '梨子', '榴莲');
 //遍历数组;数组长度count()函数实现
 $len = count($ary);
 for ($i = 0; $i < $len; $i++){
 	echo $ary[$i].'<br>';
 }
 print_r($ary);
 //php引用 调用include
 //	include '文件路径';
$title = '请输入汉字';
 echo '<br>'.'<input type='.'text'.' placeholder='.$title.'>';

?>
