# 计算概论H4
作业参考程序

~~~
input: '1011'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: carry}
  # then carry the 1
  carry:
    1      : {write: 0, L}
    [0,' ']: {write: 1, L: done}
  done:

~~~

我们先来阅读一下给的+1的**示例代码**，就会发现，这一大坨东西实际上是先移动到最右边，遇到空格后从`right`状态变成`carry`状态。

这个时候你的图灵机是`carry`状态，并且需要向左走了，讨论一下：
1. 如果最右边是0，那就改成1，然后你的加法就做完了，这个时候就从`carry`状态变成了`done`状态。
2. 如果最右边是1，那就改成0，然后向前进位，遇到1就改成0，遇到0就改成1，但是需要注意的是，如果是`1->0`，说明还需要继续向左；如果是`0->1`或者`' '->1`，说明已经进位到不能再进位了，这个时候就可以变成`done`了。

## exercise 1
要求：完成+1运算之后挪到最左边，~~这个很好想~~

首先我们看一下提示`Hint: add a state between carry and done.`，我们想一下，`carry`到`done`表明你已经+1结束了。那这个时候我们在中间加一个状态`ndone`来表明还没有跑到最左边是不是很合理（？

所以说，我们就可以加一个`ndone`状态，让图灵机在这个状态下遇到0和1都向左，遇到空格就停下来不就行了，经过~~简单~~思考就可以写出下面这种东西

~~~
input: '1011'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: carry}
  # then carry the 1
  carry:
    1      : {write: 0, L}
    [0,' ']: {write: 1, L: ndone}
  ndone:
    [0,1] : {L}
    ' ' : {R: done}
  done:
~~~
## exercise 2
要求：写一个+2的版本，这个比第一个简单薏苡倍（？

先看提示

~~~
Hint: 2 is '10' in binary, so the last digit is unaffected.

Alternative hint: chain together two copies of the machine from the first exercise (renaming the states of the second copy).
~~~
第一个的意思是2在二进制上表示是10，所以说+2对最后一位没有影响，所以就有了第一种做法：将最右边的一位跳过，从右边第二位开始+1

~~~
input: '00'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: ncarry}
  # then carry the 1
  ncarry:
    [1,0]: { L: carry}
  carry:
    1      : {write: 0, L}
    [0,' ']: {write: 1, L: done}
  done:
~~~

第二个提示的意思也很简单，就是2=1+1，所以直接把+1的程序复制一遍改一下状态名就行

~~~
input: '10'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: carry}
  # then carry the 1
  carry:
    1      : {write: 0, L}
    [0,' ']: {write: 1, L: rightagain}
  rightagain:
    [1,0]: R
    ' '  : {L: carryagain}
  carryagain:
    1      : {write: 0, L}
    [0,' ']: {write: 1, L: done}
  done:
~~~
这样练习二也就结束了

## exercise 3
要求：对大于零的数实现一个-1的版本

这个想一下，发现和+1是一个意思，同样的，先把读写头移到最右边，然后获得一个`carry`状态，这个时候需要向左走了，讨论一下：
1. 如果最右边是1，那就改成0，然后你的减法就做完了，这个时候就从`carry`状态变成了`done`状态。
2. 如果最右边是0，那就改成1，然后向前借位，遇到1就改成0，遇到0就改成1，但是需要注意的是，如果是`0->1`，说明还需要继续向左借位；如果是`1->0`，说明已经到最左边了，这个时候就可以变成`done`了。
3. 但是这样还不够，对于一些数据，会在左边留下一大坨0，很不美观，所以在`done`之前，我们想把这些0清理一下。随便加个新状态，如果是遇到0，就删掉，如果是1，就`done`应该就行

这样子就可以写出下面这一坨东西
~~~
input: '1'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: carry}
  # then carry the 1
  carry:
    0      : {write: 1, L}
    1: {write: 0, R: ndone}
  ndone:
    0: {L: done}
    1: {L: wait}
  wait:
    0: {write: ' ',L}
    ' ': {R: done}
  done:
~~~