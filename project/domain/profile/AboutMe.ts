export class AboutMe {
  private _email: string;
  private _firstname: string;
  private _lastname: string;
  private _pseudo: string;

  public constructor(email: string, firstname: string, lastname: string, pseudo: string) {
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
    this._pseudo = pseudo;
  }

  set email(value: string) {
    this._email = value
  }

  set firstname(value: string) {
    this._firstname = value
  }

  set lastname(value: string) {
    this._lastname = value
  }

  set pseudo(value: string) {
    this._pseudo = value
  }

  get email(): string {
    return this._email
  }

  get firstname(): string {
    return this._firstname
  }

  get lastname(): string {
    return this._lastname
  }

  get pseudo(): string {
    return this._pseudo
  }
}
