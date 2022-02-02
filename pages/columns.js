import React from "react";
import {TableBox} from "./styledComponents";

const columns = () => [
    {
        title: "ID",
        key: "id",
        dataIndex: "id",
        width: 50,
        render(id) {
            return <TableBox>{id}</TableBox>;
        }
    },
    {
        title: "Post ID",
        key: "postId",
        dataIndex: "postId",
        width: 100,
        render(postId) {
            return <TableBox>{postId}</TableBox>;
        }
    },
    {
        title: "Name",
        key: "name",
        dataIndex: "name",
        width: 250,
        render(name) {
            return <TableBox>{name}</TableBox>;
        }
    },
    {
        title: "Email",
        key: "email",
        dataIndex: "email",
        width: 150,
        render(email) {
            return <TableBox>{email}</TableBox>;
        }
    },
    {
        title: "Body",
        key: "body",
        dataIndex: "body",
        width: 500,
        render(body) {
            return <TableBox>{body}</TableBox>;
        }
    },
];

export default columns;
