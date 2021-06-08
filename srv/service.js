  module.exports = (srv) => {
      srv.before("CREATE", "Ratings", checkDuplicate);
  };

  const checkDuplicate = async (req) => {
      const { Ratings } = cds.entities("com.flexso.dev2dev");
      let result = await req.run(SELECT.from(Ratings).where({beer_id: req.data.beer_id, user: req.data.user }));
      if (result.length > 0) {
                  req.reject(400, `Duplicate rating for user '${req.data.user}' for beer '${req.data.beer_id}'`);
	  }
  };