 namespace com.flexso.dev2dev;

  entity Beers {
      key id      : Integer;
          brewery : String;
          name    : String;
          style   : String;
          abv     : Double;
          origin  : String;
          descr   : String;
          image   : String;
          ratings : Composition of many Ratings
                      on ratings.beer = $self
  }

  entity Ratings {
      key id          : UUID;
          beer        : Association to Beers;
          user        : String;
          collar      : Integer;
          opacity     : Integer;
          color       : Integer;
          smell       : {
              fruit   : Integer;
              malt    : Integer;
              spice   : Integer
          };
          taste       : {
              sweet   : Integer;
              bitter  : Integer;
              sour    : Integer;
              body    : Integer;
              acidity : Integer;
          };
          rating      : Integer;
  }