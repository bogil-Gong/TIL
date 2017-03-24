# Box Model and Semantic Elements
### (Box 모델과 Elements의 의미)

## Boxes on the Web
#### Content 중심은 아닌 Box
```
display: block;
```

#### Contents 중심의 Box
```
display: inline;
```

## Box Model
* content
* padding
* border
* margin

![Box Model](/Img/boxmodel_1.png)

## Box Sizing
```
.box-model {
  width: 175px;
  height: 175px;
  padding: 50px;
  margin:20px;
}
```

![Box Model](/Img/box-model-sizing.png)

## Containers

## Inline Boxes

## Element
[MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element)

![Box Model](/Img/elements.png)

## Text-align
#### 이런 그림을
![Box Model](/Img/text-align_01.png)
#### 이런그림으로 바꿀때는
![Box Model](/Img/text-align.png)

```css
.div {
  text-align: right;
}

.img {
  text-align: right;
  float: right;
  padding-left: inherit;
}
```

## Vertical-Align
![Box Model](/Img/vertical-align-table-cells.png)


```css
a2 + b2 = c2

.class {
  vertical-align: super;
}
```
```
a² + b² = c²
```

```css
H2 + 3H2 → 2NH3
.class{
  vertical-align: sub;
}
```
![Box Model](/Img/vertical-align-sub.png)

## Line-Height
![Box Model](/Img/line-spacing.png)
```css
 .class{
   line-height: 1.2;
   line-height: 19.2px;
   line-height: 120%;
 }
```
## CSS Tricks
[CSS Tricks](https://css-tricks.com/fun-line-height/)

## ul-li tag 가로정렬방법

### 1. 1.li에 float: left를 추가. ul을 li의 height만큼 늘어나게 하려면 ul에 overflow: auto 추가
```css
ul {
　　　overflow: auto;
}

li {
　　　float: left;
}
```
### 2.ul에 list-style-type: none 추가하고 li에 display: inline 추가
```css
ul{
  list-style-type: none;
}

li{
  display: inline;
}
```
## Table 만드는 법

![Box Model](/Img/table-1.png)
```html
<table>
  <tr>
    <td>Variety</td>
    <td>Color</td>
  </tr>
  <tr>
    <td>Fuji</td>
    <td>Red blush, yellow stripes, green</td>
  </tr>
  <tr>
    <td>Gala</td>
    <td>Red-orange, yellow stripes</td>
  </tr>
  <tr>
    <td>Golden Delicious</td>
    <td>Yellow-green</td>
  </tr>
</table>
```
