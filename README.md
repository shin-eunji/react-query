# React

> 현재 딱 1년차로 잊어버렸던 혹은 제대로 알지 못했던 React를 다시 복습하며 디벨롭 해보는 시간입니다.
> 
> 목표: 2021년도 마무리를 위해 React 전체 커리큘럼을 한 번 더 복습.
> 일정: 2021년 12월 21일 ~ 12월 30일 (10일간) 

## styled-components (2021.12월 21일)
- [x] Styled-components
- why?
- first style components
- adapting and Extending
- 'As' and Attrs
- Animations and Pseudo Selectors


### 'As' and Attrs - (추가)
똑같은 styled-components에서 button으로 명시해주었지만 <b>as="a"</b> 태그로 html 속성을 변환할 수 있다.

```javascript
<>
  <Btn>Log in</Btn>
  <Btn as="a" href="#">Log out</Btn>
</>

const Btn = styled.button`
...
`
```
```html
<button class="sc-iBPTIC">Log in</button>
<a class="sc-iBPTIC">Log out</a>
```

### typescript
```git
npm install @types/styled-components

```
