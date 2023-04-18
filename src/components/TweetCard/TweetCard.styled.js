import styled from '@emotion/styled';
import picture from '../../pictures/picture.png';
import picture_retina from '../../pictures/picture@2x.png';
import logo from '../../pictures/logo.png';
import logo_retina from '../../pictures/logo@2x.png';

export const Item = styled.li`
  width: 380px;
  height: 460px;
  position: relative;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  line-height: ${({ theme }) => theme.spacing.main};

  &::after {
    position: absolute;
    z-index: 10;
    content: '';
    width: 100%;
    height: 8px;
    top: calc(50% - 12px);
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.follow};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.div`
  width: 76px;
  height: 22px;
  position: absolute;

  background-image: url(${logo});
  background-repeat: no-repeat;
  top: 20px;
  left: 20px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${logo_retina});
    background-size: 76px 22px;
  }
`;

export const Background = styled.div`
  width: 308px;
  height: 168px;

  background-image: url(${picture});
  background-repeat: no-repeat;

  margin: 0 auto;
  margin-top: 28px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${picture_retina});
    background-size: 308px 168px;
  }
`;

export const Avatar = styled.img`
  position: relative;
  z-index: 100;

  height: 80px;
  width: 80px;
  margin: 0 auto;
  margin-top: -12px;
`;

export const DataWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 26px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Data = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.follow};
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin: 0 auto;

  background-color: ${({ active, theme }) =>
    active ? theme.colors.following : theme.colors.follow};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.buttonText};
  transition: background-color 0.2s;
`;
