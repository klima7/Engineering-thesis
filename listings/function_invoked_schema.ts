const schemaSetWorkingAreaParams = Joi.object({
  placeId: Joi.string().required().min(1).max(100),
  radius: Joi.number().integer().required().min(0).max(MAX_AREA_RADIUS),
});