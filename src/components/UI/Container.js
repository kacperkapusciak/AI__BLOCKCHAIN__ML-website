import styled from "styled-components";
import {phone, tablet, laptop, desktop} from "components/UI/style-consts";

const Container = styled.div`
  @media (min-width: ${phone}) {
    width: ${phone};
    margin: 0 auto;
  }
  @media (min-width: ${tablet}) {
    width: ${tablet};
  }
  @media (min-width: ${laptop}) {
    width: ${laptop};
  }
  @media (min-width: ${desktop}) {
    width: ${desktop};
  }
`;

export default Container;
