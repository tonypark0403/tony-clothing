import styled from "styled-components";
import device from "../../common/Device";
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 560px) {
    .home {
      display: flex;
      align-items: center;
    }
  }
  @media ${device.laptop} {
    /*@media (min-width: 1024px)*/
    max-width: 95vw;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
