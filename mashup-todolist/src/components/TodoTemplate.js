import React from 'react';
import styled from 'styled-components';
//레이아웃을 설정하는 컴포넌트.  그림자가 적용된 흰색박스를 보여준다
const TodoTemplateBlock = styled.div`
  width: 100%;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #fcfcfc;
  border-radius: 16px;
  box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;