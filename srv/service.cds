  using {com.flexso.dev2dev as schema} from '../db/schema';

  service RatingService {

        entity Beers   as
	    select from schema.Beers {
		  *,
		  (
			  select avg(
				  rating
			  ) as avg from schema.Ratings
			  where
				  Ratings.beer.id = Beers.id
		  ) as avgRating @(Core.Computed) : Double
	    };
      entity Ratings as projection on schema.Ratings;

  }