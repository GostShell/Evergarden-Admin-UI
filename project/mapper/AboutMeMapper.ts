import { morphism } from 'morphism'
import { AboutMe } from '../domain/profile/AboutMe'

export class AboutMeMapper {

  private static readonly SCHEMA : Object = {
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    pseudo: 'pseudo',
    avatar: 'avatar'
  }

  public static mapToAboutMe(source: Object): AboutMe {
    return morphism(AboutMeMapper.SCHEMA, source, AboutMe)
  }

}
