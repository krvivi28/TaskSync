let db_id = 0;
export class Iuser {
  id?: number;
  name: string;
  email: string;
  password: string;
  gender: string;
  constructor(name: string, email: string, password: string, gender: string) {
    this.id = ++db_id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}
