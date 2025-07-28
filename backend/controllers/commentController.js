import Comment from "../models/commentModel.js";

export async function createComment(request, reply) {
  const { recipeID } = request.params;
  const { content, userID } = request.body;
  //Crear JWT token para el usuario autenticado
  //const userId = request.user.id;

  if (!recipeID || !content) {
    return reply
      .code(400)
      .send({ status: "error", error: "Post ID y contenido son requeridos" });
  }

  try {
    const newComment = new Comment({
      recipeID,
      userID,
      content,
    });

    await newComment.save();

    return reply.code(201).send({ status: "success", comment: newComment });
  } catch (error) {
    console.error("Error al crear el comentario:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al crear el comentario" });
  }
}

export async function getCommentsByRecipe(request, reply) {
  const { recipeID } = request.params;
  if (!recipeID) {
    return reply
      .code(400)
      .send({ status: "error", error: "Recipe ID es requerido" });
  }

  try {
    const comments = await Comment.find({ recipeID }).populate(
      "userID",
      "email fullname"
    );
    return reply.code(200).send({ status: "success", comments });
  } catch (error) {
    console.error("Error al obtener los comentarios:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener los comentarios" });
  }
}
