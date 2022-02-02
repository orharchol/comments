import styled from "styled-components";
import React from "react";
import {Table, Button} from "antd";

export const PageLayout = styled.div`
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    width: 100%; 
    margin: 10px 10px 40px 10px;
`

export const ButtonsLayout = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 300px;
`;

export const AddCommentLayout = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
`;

export const TableBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled(Button)`
    opacity: 1 !important;
    height: 40px;
    width: 200px;
    color: #FFFFFF;
    background-color: #11344C;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    border: 1px solid #E9EDF4;
    display: flex;
    align-items: center;
    justify-content: center;
    boz-shadow: none !important;
    cursor: pointer;
    font-family: sans-serif;
    
    &:hover, &:active {
        opacity: 0.95 !important;
        font-size: 16px;
        outline: none;
        border: 1px solid #c3c6ca !important;
        boz-shadow: none !important;
    }
`;

export const PageTitleLabel = styled.div`
    font-size: 28px;
    font-weight: 700; 
    color: #273444; 
    display: flex;
    font-family: sans-serif;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 20px;
    max-height: 80px;
`;

export const RoundedTable = styled(Table)`
    border-radius: 15px;
    border: 1px solid #E7EBF3;
    overflow: auto; 
    width: 1200px;
    display: flex;
    align-self: center;
    height: 600px;
    font-family: sans-serif;
    margin-bottom: 50px;
`;