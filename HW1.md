# 计算概论H1作业
以Windows 10系统为例
## 启用telnet
打开开始菜单→设置→应用→程序和功能→启用或关闭windows功能，找到“Telnet客户端”，勾选并确认。
## 通过POP3协议接收你邮箱中的一封邮件
以北京大学学号邮箱为例

1. 打开cmd或者powershell
2. 输入`telnet pophz.qiye.163.com 110`
3. 看到`+OK POP3 ready`后输入`user 学号邮箱`并回车，比如`user 20000xxxxx@stu.pku.edu.cn`
4. 看到`+OK send pass`后输入`pass 邮箱密码`并回车，比如`pass [数据隐藏]`
5. 如果看到了类似`+OK 514 message(s)`的东西，说明登录成功了。这时候就可以使用`retr`这个命令查看邮件了，比如说我输入一个`retr 514`就可以看到我最新的一篇邮件。

比如说看到base64加密过的这一大坨

> `ICAgICAgICAgICDlkIzlrabku6zor7fms6jmhI/vvIzjgIzkvZzkuJrkuIDjgI3nmoTmj5DkuqTmiKrmraLml7bpl7TkuLrmnKzlkajml6XvvIg5Jm5ic3A75pyIIDExJm5ic3A75pel77yJMjM6MzDvvIzpgL7mnJ/mj5DkuqTlsIbooqvmoIforrDvvIzor7flkIzlrabku6zlsL3ml6nmj5DkuqToh7Plr7nlupTmj5DkuqTnqpflj6PjgIIgICAgICA=`

解码之后其实是这个，这是某门课程老师发的交作业通知，我应该写了吧（草

> 同学们请注意，「作业一」的提交截止时间为本周日（9&nbsp;月 11&nbsp;日）23:30，逾期提交将被标记，请同学们尽早提交至对应提交窗口。    

## 通过HTTP协议获取409放映室网站（[162.105.17.143:6580](162.105.17.143:6580)）首页内容
首先需要注意的是这个ip地址需要通过校园网访问，然后就没了

1. 打开cmd或者powershell
2. 输入`telnet 162.105.17.143 6580`
3. 连接成功的话应该是命令行一坨空白，啥都没有，这个时候按`ctrl+]`然后回车。
4. 这样子我们就可以愉快的输命令了，输入`GET / HTTP/1.0`然后回车应该就可以了，这里唯一需要注意的点就是不要输错命令。

![jiaran](https://pic4.zhimg.com/80/v2-f4038481a5f6570a77e7741c17a48e2b_720w.jpg)
   
但是现在校园网貌似出了问题，暂时连接不上。

![ranran](https://pic2.zhimg.com/80/v2-5c600cb201a305660b8a9fe20144d025_720w.jpg)
