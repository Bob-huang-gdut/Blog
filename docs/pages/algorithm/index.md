# 算法

## 1.两个数组的交集(350)
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
```
输入: nums1 = [1,2,2,1], nums2 = [2,2]

输出: [2,2]
```

示例 2:
```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]

输出: [4,9]
```

说明：
- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

思路：设定两个为0的指针，比较两个指针的元素是否相等。如果指针的元素相等，我们将两个指针一起向后移动，并且将相等的元素放入空白数组。

```js
function fun1_1(nums1, nums2) {
  const obj = {}
  nums1.map(item => {
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] += 1
    }
    return item
  })
  console.log('%c⧭', 'color: #00a3cc', obj);
  const res = []
  nums2.map(item2 => {
    if (obj[item2] && obj[item2] > 0) {
      obj[item2] -= 1
      res.push(item2)
    }
    return item2
  })
  return res
}
console.log('%c⧭', 'color: #00e600', fun1_1([1,2,2,1], [2,2]));
console.log('%c⧭', 'color: #00e600', fun1_1([4,9,5], [9,4,9,8,4]));
```
- 如果给定的数组已经排好序呢？将如何优化你的算法呢？
```js
function fun1_2(nums1, nums2) {
  nums1.sort()
  nums2.sort()
}
console.log('%c⧭', 'color: #00e600', fun1_2([1,2,2,1], [2,2]));
console.log('%c⧭', 'color: #00e600', fun1_2([4,9,5], [9,4,9,8,4]));
```

## 2.最长公共前缀(14)
编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回""

示例 1:
```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:
```
输入: ["dog","racecar","car"]
输出: ""
```
然后我们只需要依次将基准元素和后面的元素进行比较（假定后面的元素依次为x1,x2,x3....），不断更新基准元素，直到基准元素和所有元素都满足最长公共前缀的条件，就可以得到最长公共前缀。

![](https://www.geekxh.com/assets/img/1.57270b1c.png)
```js
function fun2(strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  let res = ''
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      console.log('prefix[i] %c⧭', 'color: #00bf00', prefix[i]);
      console.log('strs[j][i] %c⧭', 'color: #00bf00', strs[j][i]);
      if (prefix[i] !== strs[j][i]) return res;
    }
    res += prefix[i]
  }
  return res
}

console.log('%c⧭', 'color: #733d00', fun2(["flower","flow","flight"]));
```

## 3.买卖股票的最佳时机(122)
![](https://www.geekxh.com/assets/img/1.d58fcd9b.jpg)
而且这一类型的题，面试时出现的频率非常的高。稍微改一改条件，就让我们防不胜防。那我们如何攻克这一类题型呢？我们从最简单的一道开始看起：

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。注意你不能在买入股票前卖出股票。

第122题：买卖股票的最佳时机 II
示例 1:
```
输入: [7,1,5,3,6,4]
输出: 7
```
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。

随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

## 4.旋转数组(189)

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
```
```js
function fun4(arr, k) {
  return arr.slice(arr.length-k, arr.length).concat(arr.slice(0, arr.length-k))
}

console.log('%c⧭', 'color: #733d00', fun4([-1,-100,3,99], 6));
```

## 5.原地删除(27)

给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
示例 1:
```
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。
```
```js
function fun5(arr, val) {
  return arr.filter(item => item !== val).length
}

console.log('%c⧭', 'color: #733d00', fun5([3,2,2,3], 3));
```

### 6.加一(66)

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。