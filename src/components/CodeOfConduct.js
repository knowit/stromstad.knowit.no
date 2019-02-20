import React from 'react';
import styled from '@emotion/styled';
import spacing from '../util/spacing';
import Button from './Button';
import mediaQueries from '../util/mediaQueries';

const StyledCodeOfConduct = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledCodeOfConductText = styled.p`
  display: block;
  max-width: 40%;
  margin: ${spacing.small} auto;
  display: ${p => (p.hidden ? 'none' : 'block')};

  @media (${mediaQueries.medium}) {
    max-width: 90%;
  }
`;

class CodeOfConduct extends React.Component {
  constructor() {
    super();
    this.state = { showCodeOfConduct: false };
    this.toggleCodeOfConduct = this.toggleCodeOfConduct.bind(this);
  }

  toggleCodeOfConduct() {
    this.setState(prevState => ({
      showCodeOfConduct: !prevState.showCodeOfConduct,
    }));
  }

  render() {
    const { showCodeOfConduct } = this.state;
    return (
      <StyledCodeOfConduct>
        <Button onClick={this.toggleCodeOfConduct}>Code of Conduct</Button>
        <StyledCodeOfConductText hidden={!showCodeOfConduct}>
          Ha det gøy og hjelp andre med å ha det gøy også! Si hei til noen du
          ikke kjenner. Møt interessante mennesker. Ikke virk overrasket hvis
          folk ikke passer inn i en stereotype. Start samtaler om teknologi,
          været, maten eller noe annet. Le og lær. Alle er her for å ha det gøy
          og lære noe nytt! Vi forventer at du respekterer andre deltakere,
          uavhengig av kjønn, etnisitet, religion, alder, legning, funksjonsevne
          eller andre aspekter knyttet til hvordan vi ser ut, kommer fra eller
          hvem vi er. La oss få vite hvis noe kommer i veien for noe av dette.
        </StyledCodeOfConductText>
      </StyledCodeOfConduct>
    );
  }
}

export default CodeOfConduct;
