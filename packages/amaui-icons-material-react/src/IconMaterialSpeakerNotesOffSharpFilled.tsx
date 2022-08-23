import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffSharpFilled'
      short_name='SpeakerNotesOff'

      {...props}
    >
      <path d="M20.5 23.3 15.15 18H6L2 22V4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM20.7 17.85 13.85 11H18V9H11.85L10.85 8H18V6H10V7.15L4.85 2H22V17.85ZM7 14Q7.425 14 7.713 13.712Q8 13.425 8 13Q8 12.575 7.713 12.287Q7.425 12 7 12Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM7 11Q7.425 11 7.713 10.712Q8 10.425 8 10Q8 9.575 7.713 9.287Q7.425 9 7 9Q6.575 9 6.287 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffSharpFilled.displayName = 'AmauiIconMaterialSpeakerNotesOffSharpFilled';

export default IconMaterialSpeakerNotesOffSharpFilled;
