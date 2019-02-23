import {ErrorMessageConstants} from "../constants/error-message-constants";

export class ErrorMessageHelper {

  public static getErrorMessageResponse(error: string): string {
    if (error.includes("Wrong password for user")) {
      return ErrorMessageConstants.BAD_PASSWORD;
    }
    if (error.includes("does not exists")) {
      return ErrorMessageConstants.USER_NOT_FOUND;
    }

    return ErrorMessageConstants.UNEXPECTED_ERROR
  }
}
