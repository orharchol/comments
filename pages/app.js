import React, {useState, useEffect} from "react";
import {useMutation, useQuery} from "react-query";
import {Input} from "antd";
import {
    AddCommentLayout,
    ButtonsLayout,
    PageLayout,
    PageTitleLabel,
    RoundedTable,
    StyledButton
} from "./styledComponents";
import columns from "./columns";
import {getComments, postComment, RANGE_SIZE} from "./api/queries";

export const CommentsApp = () => {

    const [fromId, setFromId] = useState(1);
    const [newComment, setNewComment] = useState(null);
    const [totalComments, setTotalComments] = useState([]);

    const { isLoading: getCommentsLoading, isError, error, data: comments } = useQuery(["commentsData", fromId], getComments);
    const {mutate} = useMutation(postComment);

    useEffect(() => {
        setTotalComments(totalComments.concat(comments));
    }, [comments]);

    if (isError) {
        return <div>Error! {error.message}</div>
    }

    return (
        <PageLayout>
            <PageTitleLabel>
                Comments Table
            </PageTitleLabel>
            <ButtonsLayout>
                <StyledButton
                    loading={getCommentsLoading}
                    onClick={() => setFromId(fromId + RANGE_SIZE)}
                >
                    Load more comments
                </StyledButton>
                <AddCommentLayout>
                    <StyledButton
                        onClick={() => {
                            mutate({newComment});
                            setNewComment(null);
                        }}
                        disabled={!newComment}
                        style={{marginRight: 20}}
                    >
                        Add comment
                    </StyledButton>
                    <Input onChange={(e) => setNewComment(e.target.value)} value={newComment}/>
                </AddCommentLayout>
            </ButtonsLayout>
            <RoundedTable
                rowKey="id"
                pagination={false}
                loading={getCommentsLoading}
                dataSource={totalComments}
                columns={columns()}
            />
        </PageLayout>
    )
};