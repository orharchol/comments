import axios from "axios";
import {flatten, range} from "lodash";

export const RANGE_SIZE = 4;

export const getComments = async ({queryKey}) => {
    const fromId = queryKey[1];
    try {
        const allComments = await Promise.all(range(fromId, fromId + RANGE_SIZE).map(postId => {
            return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        }));
        return flatten(allComments.map(comments => comments.data));
    } catch (e) {
        throw new Error("Oh no! something went wrong");
    }
};

export const postComment = async (data) => {
    try {
        await axios.post("test.steps.me/test/testAssignComment", data);
    } catch (e) {
        alert("Failed saving Comment (but it's ok we have plenty more)")
    }
};