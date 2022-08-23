import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoicemailSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoicemailSharpFilled'
      short_name='Voicemail'

      {...props}
    >
      <path d="M6.5 16Q4.625 16 3.312 14.688Q2 13.375 2 11.5Q2 9.625 3.312 8.312Q4.625 7 6.5 7Q8.375 7 9.688 8.312Q11 9.625 11 11.5Q11 12.175 10.8 12.8Q10.6 13.425 10.25 14H13.75Q13.4 13.425 13.2 12.8Q13 12.175 13 11.5Q13 9.625 14.312 8.312Q15.625 7 17.5 7Q19.375 7 20.688 8.312Q22 9.625 22 11.5Q22 13.375 20.688 14.688Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialVoicemailSharpFilled.displayName = 'AmauiIconMaterialVoicemailSharpFilled';

export default IconMaterialVoicemailSharpFilled;
