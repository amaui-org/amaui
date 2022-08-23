import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerGroupSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupSharp'
      short_name='SpeakerGroup'

      {...props}
    >
      <path d="M10 17H19V3H10ZM8 19V1H21V19ZM14.5 7.5Q15.125 7.5 15.562 7.062Q16 6.625 16 6Q16 5.375 15.562 4.938Q15.125 4.5 14.5 4.5Q13.875 4.5 13.438 4.938Q13 5.375 13 6Q13 6.625 13.438 7.062Q13.875 7.5 14.5 7.5ZM14.5 16Q15.95 16 16.975 14.975Q18 13.95 18 12.5Q18 11.05 16.975 10.025Q15.95 9 14.5 9Q13.05 9 12.025 10.025Q11 11.05 11 12.5Q11 13.95 12.025 14.975Q13.05 16 14.5 16ZM14.5 14Q13.875 14 13.438 13.562Q13 13.125 13 12.5Q13 11.875 13.438 11.438Q13.875 11 14.5 11Q15.125 11 15.562 11.438Q16 11.875 16 12.5Q16 13.125 15.562 13.562Q15.125 14 14.5 14ZM16 23H4V5H6V21H16ZM10 17V3V17Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupSharp.displayName = 'AmauiIconMaterialSpeakerGroupSharp';

export default IconMaterialSpeakerGroupSharp;
