import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from './github';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';
import IconYoutube from './youtube';
import IconTwitter from './twitter';
import IconDiscord from './discord';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'github':
      return <IconGitHub />;
    case 'instagram':
      return <IconInstagram />;
    case 'linkedin':
      return <IconLinkedin />;
    case 'youtube':
      return <IconYoutube />;
    case 'twitter':
      return <IconTwitter />;
    case 'discord':
      return <IconDiscord />;
    default:
      return null;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
