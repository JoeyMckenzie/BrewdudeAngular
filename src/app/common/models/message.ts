export class Message {

  private _message;

  constructor(private $message: string) {
    this._message = $message;
  }

  get message(): string {
    return this._message;
  }

  set message(newMessage: string) {
    this._message = newMessage;
  }
}
