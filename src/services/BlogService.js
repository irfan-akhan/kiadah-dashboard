import Axios from "../utils/axios";

export async function getBlogs(page) {
	const { data } = await Axios.get(`/posts?page=${page}`);
	return data;
}
export async function getBlog(id) {
	const { data } = await Axios.get(`/posts/${id}`);
	return data;
}

export async function updateBlog(id, { ...input }) {
	const FORMDATA = new FormData();
	FORMDATA.append("adImage", input.image[0]);
	const { data } = await Axios.patch(`/posts/${id}`, {
		title: input.title,
		description: input.description,
	});
	const pic = await Axios.put(
		`${process.env.NEXT_PUBLIC_API_URL}/blog/upload/image/${id}`,
		FORMDATA,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);
	return data;
}

export async function deleteBlog(id) {
	const { data } = await Axios.delete(`/posts/${id}`);
	return data;
}
export async function createPost(input) {
	const { data } = await Axios.post(`/posts`, input);
	return data;
}
