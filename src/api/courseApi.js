import { API } from "aws-amplify";
import {
  createCourse as createCourseMutation,
  updateCourse as updateCourseMutation,
  deleteCourse as deleteCourseMutation,
} from "../graphql/mutations";
import { listCourses } from "../graphql/queries";

export async function getCourses() {
  const apiData = await API.graphql({ query: listCourses });
  return apiData.data.listCourses.items;
}

export async function saveCourse(course) {
  await API.graphql({
    query: createCourseMutation,
    variables: { input: course },
  });
  return course;
}

export async function deleteCourse(courseId) {
  await API.graphql({
    query: deleteCourseMutation,
    variables: { input: { id: courseId } },
  });
}
