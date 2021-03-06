import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllCategoriesHandler = function () {
  try {
    return new Response(200, {}, { categories: this.db.categories });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/category/:categoryId
 * */

export const getCategoryQuizesHandler = function (schema, request) {
  const categoryId = request.params.categoryId;
  try {
    const quizes = schema.quizzes.where({ categoryId });
    return new Response(200, {}, { quizes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
