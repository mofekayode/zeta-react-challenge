import styled from "styled-components";
export const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  height: 700px;
  max-height: 700px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  background-color: rgb(26, 27, 30);
  box-shadow: rgb(21, 21, 24) 12px 12px 24px 0px,
    rgb(36, 37, 41) -12px -12px 24px 0px;
  -webkit-box-shadow: rgb(21, 21, 24) 12px 12px 24px 0px,
    rgb(36, 37, 41) -12px -12px 24px 0px;
  border-radius: 40px;
  -webkit-border-radius: 40px;
`;
export const Form = styled.form`
  margin-bottom: 32px;
`;
export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 10px 0 0 10px;
  border: 2px solid black;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
`;
export const InputEdit = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 10px 0 0 10px;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
  border: 2px solid rgb(233, 67, 94);
`;
export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  outline: none;
  background: black;
  color: #fff;
  text-transform: capitalize;
`;
export const ButtonEdit = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  outline: none;
  background: black;
  color: #fff;
  text-transform: capitalize;
  background: rgb(233, 67, 94);
  padding: 16px 22px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  padding: 20px 0px;
`;
export const Select = styled.select`
  color: white;
  background-color: rgb(26, 27, 30);
  border-radius: 10px;
  border: 0.01px solid white;
  padding: 10px;
  cursor: pointer;
`;

export const TodoSpace = styled.div`
  height: 380px;
  max-height: 380px;
  padding-bottom: 32px;
  overflow-y: scroll;
`;
export const TextPrimary = styled.h1`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
`;
export const TextSecondary = styled.h2`
  margin: 12px 0;
  color: #fff;
  font-size: 16px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  position: relative;
`;
export const DeleteSpace = styled.div`
  background-color: red;
  height: 74px;
  width: 50px;
  z-index: 1;
  position: absolute;
  border-radius: 0px 10px 10px 0px;
  top: -25px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: black;
  cursor: pointer;
  padding: 16px 0px 16px 16px;
  border-radius: 5px;
  width: 90%;

  /* background: rgb(236, 236, 236);
color: black; */
`;
