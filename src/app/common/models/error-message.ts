export class ErrorMessage {

  private readonly _id: number;
  private _error: string;
  private _response: string;

  constructor(
    private $id: number,
    private $error: string,
    private $response?: string
  ) {
    this._id = $id;
    this._error = $error;

    if ($response) {
      this._response = $response;
    }
  }

  get id(): number {
    return this._id;
  }

  get error(): string {
    return this._error;
  }

  set error(errorMessage: string) {
    this._error = errorMessage;
  }

  get response(): string {
    if (this._response) {
      return this._response;
    }
    return '';
  }

  set response(responseMessage: string) {
    this._response = responseMessage;
  }
}
