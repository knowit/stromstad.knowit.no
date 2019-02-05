import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core'
import Content, { ContentContainer } from '../Content';
import colors from '../../util/colors';
import spacing from '../../util/spacing';
import ButtonGroup from '../ButtonGroup';
import markdownStyle from './markdownStyle';

const buttonGroupStyle = css`
  margin: 2rem auto;
`;

const StyledMarkdownContainer = styled.div`
    background-color: white;
    border: 1px solid ${colors.greyLight};
    padding: ${spacing.normal};
    margin-top: ${spacing.normal};
`

const VillageMarkdown = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Content backgroundColor={colors.greyLightest}>
        <ButtonGroup css={buttonGroupStyle}>
            <Link to="/">Forside</Link>
            <Link to="/schedule/">Skjema</Link>
            <Link to="/villages/">Villages</Link>
        </ButtonGroup>
        <ContentContainer>
          <StyledMarkdownContainer
            css={markdownStyle}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ContentContainer>
    </Content>
  )
}

export default VillageMarkdown;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
