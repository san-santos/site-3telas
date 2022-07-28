import {
  MainIconsMenu,
  MainIconWhatSapp,
  MainIconInstagram,
  MainIconFaceBook
} from '../styled'

const SocialMedia = () => {
  return (
    <>
      <MainIconsMenu>
        <MainIconWhatSapp
          href="https://api.whatsapp.com/send?phone=55119913722"
          target={'_blank'}
        />
        <MainIconInstagram
          href="https://www.instagram.com/3telas/"
          target={'_blank'}
        />
        <MainIconFaceBook
          href="https://www.facebook.com/3Telas"
          target={'_blank'}
        />
      </MainIconsMenu>
    </>
  )
}

export default SocialMedia
