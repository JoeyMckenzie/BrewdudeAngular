export interface BrewdudeConfiguration {
  baseUrl: string;
  endpoints: {
    beer: string;
    brewery: string;
    user: string;
    userBeer: string;
    userBrewery: string;
  }
  modules: {
    public: string;
    private: string;
  }
}
