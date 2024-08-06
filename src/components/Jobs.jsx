import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: aquamarine;
    border: chocolate solid 4px;
    max-width: 60%;
    margin: auto;
    margin-top: 15px;
`;

const StyledHeader = styled.h3`
    color: blue;
    margin-left: 5%;
    margin-right: 5%;
`;

const StyledImage = styled.img`
    max-width: 15%;
    margin-left: 5%;
    margin-top: 3%;
`;


export default function Jobs(props) {
    return(
        <>
            <StyledDiv>
                <StyledImage src={props.companyLogo} alt="Company Logo" />
                <StyledHeader>Job Title: {props.jobTitle}</StyledHeader>
                <StyledHeader>Company Name: {props.companyName}</StyledHeader>
                <StyledHeader>Job Level: {props.jobLevel}</StyledHeader>
                <StyledHeader>Job Type: {props.jobType}</StyledHeader>
                <StyledHeader>Job Location: {props.jobGeo}</StyledHeader>
                <StyledHeader>Job Excerpt: {props.jobExcerpt}</StyledHeader>
                <StyledHeader>Url: {props.url}</StyledHeader>
            </StyledDiv>
        </>
    );
}

Jobs.propTypes = {
    key: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    jobLevel: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    jobExcerpt: PropTypes.string.isRequired,
    jobGeo: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}