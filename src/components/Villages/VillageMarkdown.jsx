import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
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
`;

const linkStyle = css`
  text-transform: uppercase;
  color: ${colors.primary};
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:visited {
    color: ${colors.primary};
  }
`;

const VillageMarkdown = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return (
    <Content backgroundColor={colors.greyLightest}>
      <ButtonGroup css={buttonGroupStyle}>
        <Link to="/" css={linkStyle}>
          Forside
        </Link>
        <Link to="/schedule/" css={linkStyle}>
          Skjema
        </Link>
      </ButtonGroup>
      <ContentContainer>
        <StyledMarkdownContainer
          css={markdownStyle}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ContentContainer>
    </Content>
  );
};

VillageMarkdown.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

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
`;
