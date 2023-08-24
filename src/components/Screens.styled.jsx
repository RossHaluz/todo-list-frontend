import styled from '@emotion/styled';

export const BoardContainer = styled.section`
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg?.URL.tabletRT});
    }
    background-image: url(${props => props.backgroundImg?.URL.tablet});
  }
  @media screen and (min-width: 1440px) {
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg?.URL.desctopRT});
    }
    background-image: url(${props => props.backgroundImg?.URL.desktop});
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 60px);
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg?.URL.mobileRT});
    }
    background-image: url(${props => props.backgroundImg?.URL.mobile});
  }
`;

export const WrrappColumns = styled.div`
  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }
`