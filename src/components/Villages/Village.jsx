import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import colors from '../../util/colors';
import spacing from '../../util/spacing';
import mediaQueries from '../../util/mediaQueries';
import HardwareGuild from '../Icons/HardwareGuild';
import JvmChapter from '../Icons/JvmChapter';
import WebChapter from '../Icons/WebChapter';
import RustGuild from '../Icons/RustGuild';
import SecurityChapter from '../Icons/SecurityChapter';
import CreativeCrew from '../Icons/CreativeCrew';
import Person from '../Icons/Person';
import ArtificialChapter from '../Icons/ArtificialChapter';
import ArchitectureChapter from '../Icons/ArchitectureChapter';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';

const StyledVillage = styled.div`
  border: 3px solid ${colors.primary};
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background-color: ${colors.primary};
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  margin: ${spacing.normal};
  justify-content: center;
  font-weight: 600;
  & svg {
    height: 80px;
    width: 80px;
    fill: white;
    margin-top: ${spacing.normal};
  }

  @media (${mediaQueries.medium}) {
    margin: ${spacing.small};
  }
`;

const StyledLink = styled(Link)`
  &,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    & > div {
      background-color: white;
      color: ${colors.primary};
    }

    & svg {
      fill: ${colors.primary};
    }
  }
`;
const villageIcon = {
  creativecrew: <CreativeCrew fill="white" />,
  jvmchapter: <JvmChapter />,
  person: <Person />,
  webchapter: <WebChapter />,
  rustguild: <RustGuild />,
  securitychapter: <SecurityChapter />,
  architecture: <ArchitectureChapter />,
  artificial: <ArtificialChapter />,
  hardwareguild: <HardwareGuild />,
  jubilee: <SentimentVerySatisfied />,
};

const Village = ({ village }) => {
  if (!village) {
    return null;
  }
  return (
    <StyledLink to={village.path}>
      <StyledVillage>
        {village.name}
        {villageIcon[village.icon]}
      </StyledVillage>
    </StyledLink>
  );
};

Village.propTypes = {
  village: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Village;
