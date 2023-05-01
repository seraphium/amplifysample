import { API } from "aws-amplify";
import { listAuthors } from "../graphql/queries";
import { createAuthor as createAuthorMutation } from "../graphql/mutations";

export async function getAuthors() {
  const apiData = await API.graphql({ query: listAuthors });
  return apiData.data.listAuthors.items;
}

export async function saveAuthor(author) {
  await API.graphql({
    query: createAuthorMutation,
    variables: { input: author },
  });
  return author;
}
