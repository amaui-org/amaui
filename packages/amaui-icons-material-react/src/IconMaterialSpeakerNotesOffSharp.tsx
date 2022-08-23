import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffSharp'
      short_name='SpeakerNotesOff'

      {...props}
    >
      <path d="M7 14Q6.575 14 6.287 13.712Q6 13.425 6 13Q6 12.575 6.287 12.287Q6.575 12 7 12Q7.425 12 7.713 12.287Q8 12.575 8 13Q8 13.425 7.713 13.712Q7.425 14 7 14ZM20.7 17.85 18.85 16H20V4H6.85L4.85 2H22V17.85ZM10.85 8 10 7.15V6H18V8ZM13.85 11 11.85 9H18V11ZM20.5 23.3 15.15 18H6L2 22V4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM4 6.8V17.175L5.175 16H13.2ZM12.85 10ZM8.6 11.4ZM7 11Q6.575 11 6.287 10.712Q6 10.425 6 10Q6 9.575 6.287 9.287Q6.575 9 7 9Q7.425 9 7.713 9.287Q8 9.575 8 10Q8 10.425 7.713 10.712Q7.425 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffSharp.displayName = 'AmauiIconMaterialSpeakerNotesOffSharp';

export default IconMaterialSpeakerNotesOffSharp;
