export const PublicConstants = {

  // passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%^&*]).{8,20}$/,
  passwordRegex: /(?=^.{6,20}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
  loginInProgress: "Scanning for fakes...",
  loginSystemError: "... looks like something unexpected happened, try logging in again.",
  registrationInProgress: "Checking with the bartenders...",
  registrationSystemError: "... looks like something unexpected happened, try logging in again.",
  configurationEndpoint: "./assets/configuration/endpoints.json",

};
