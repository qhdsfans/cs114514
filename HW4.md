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

这个和+1是类似的，首先需要将读写头移至最右边的空白处，然后向左一步并进入 `minus` 的状态，这时候对于遇到的数字要进行分类讨论：

1. 如果遇到1，那么直接修改成0，减法就完成了，从 `minus` 状态进入 `check` 状态（为什么不是 `done` 状态之后会说）
2. 如果遇到0，那么说明这一位不够减，还需要向前借位，在将此位修改为1后，向左移动并继续保持 `minus` 状态，直至遇到1.

完成上述步骤就已经可以算完成本题了，但有些追求完美的同学可能会发现，按照上述步骤，有时减法完成后在首位会留下一个0（e.g. 输入'1000'，结果为'0111'），因此如果想要去掉首位这个多余的0，就需要一些额外操作，这也就是上面进入 `check` 而不是 `done` 的原因。

进入 `check` 状态时，我们向左了一步，如果此时所在位不为空白（即为0或1），那么说明刚才的0并不在首位，可以直接进入 `done` 状态结束流程。但如果此时所在位为空白，则说明刚才的0是在首位，需要将其删除，于是向右移动一步并进入 `remove` 状态，然后 `remove` 状态将0改为空白，进入 `done` 状态结束流程。

具体代码如下：

~~~
input: '100100'
blank: ' '
start state: right
table:
  # scan to the rightmost digit
  right:
    [1,0]: R
    ' '  : {L: minus}
  # then minus the 1
  minus:
    0: {write: 1, L}
    1: {write: 0, L: check}
  check:
    [0,1]: {R: done}
    ' ': {R: remove}
  remove:
    0: {write: ' ', R: done}
  done:
~~~