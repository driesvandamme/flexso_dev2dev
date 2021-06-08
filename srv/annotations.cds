 using RatingService from './service';

  annotate RatingService.Beers with @(UI : {LineItem : [

      {
          Value : name,
          Label : 'Name'
      },
      {
          Value : brewery,
          Label : 'Brewery'
      },
      {
          Value : abv,
          Label : 'ABV %'
      },
      {
          Value : avgRating,
          Label : 'Average Rating'
      }
  ]});