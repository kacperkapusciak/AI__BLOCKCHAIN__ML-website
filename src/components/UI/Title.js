import styled from "styled-components";
import { tablet, laptop, desktop, secondary } from "components/UI/style-consts";

const Title = styled.h2`
  margin: 15px 10px;
  font-size: 20px;
  font-weight: 700;
  color: ${secondary};
  text-align: center;

  @media (min-width: ${tablet}) {
    margin-top: 20px;
    font-size: 20px;
  }
  @media (min-width: ${laptop}) {
    margin-top: 35px;
    margin-bottom: 30px;
    font-size: 24px;
  }
  @media (min-width: ${desktop}) {
    margin-bottom: 50px;
  }
`;

export default Title;
