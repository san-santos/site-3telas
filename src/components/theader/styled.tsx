import styled from 'styled-components'

/*### HEADER ###*/

export const MainHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #31308d;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainMenu = styled.div`
  width: 75%;
  height: 12%;
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #31308d;
`

export const LogoHeader = styled.div`
  background-image: url('/logotipo.jpg');
  background-repeat: none;
  background-size: contain;
  width: 180px;
  height: 65px;
  background-color: #fff;
`

export const MainLinksMenu = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
  text-decoration: none;
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Possível implementação no futuro */
  /* cursor: default; */
  :link {
    color: #fff !important;
  }
  :hover {
    color: #0f0 !important;

  :active {
    color: #0f0 !important;
  }
  cursor: pointer;
`

export const MainIconsMenu = styled.div`
  width: 10%;
  height: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MainIconWhatSapp = styled.a`
  background-image: url('/whatsapp-brands.svg');
  background-size: cover;
  background-position: center;
  background-repeat: none;
  width: 25px;
  height: 25px;
`

export const MainIconInstagram = styled.a`
  background-image: url('/Instagram-brands.svg');
  background-size: cover;
  background-position: center;
  background-repeat: none;
  width: 25px;
  height: 25px;
`

export const MainIconFaceBook = styled.a`
  background-image: url('/facebook-brands.svg');
  background-size: cover;
  background-position: center;
  background-repeat: none;
  width: 25px;
  height: 25px;
`
