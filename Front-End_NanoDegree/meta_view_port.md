# Responsive Web Design

[Google dev](https://developers.google.com/web/fundamentals/design-and-ui/responsive/?hl=ko#viewport)

## Setting Viewport

```html
<meta
 name="viewport" content="width=device-width, initial-scale=1">
```

- meta viewport 태그를 사용하여 브라우저 뷰포트의 너비와 스케일링을 조절합니다.
- width=device-width 를 이용하여 기기 너비에 맞춰 화면의 크기를 맞춥니다.
- initial-scale=1 를 이용하여 CSS 픽셀과 기기 종속적인 픽셀 간의 1:1 관계를 형성합니다.
- 당신의 페이지는 사용자가 크기를 조정할 수 있도록 해야합니다
