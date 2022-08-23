import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesSharp'
      short_name='SpeakerNotes'

      {...props}
    >
      <path d="M10 8H18V6H10ZM10 11H18V9H10ZM10 14H15V12H10ZM7 8Q7.425 8 7.713 7.713Q8 7.425 8 7Q8 6.575 7.713 6.287Q7.425 6 7 6Q6.575 6 6.287 6.287Q6 6.575 6 7Q6 7.425 6.287 7.713Q6.575 8 7 8ZM7 11Q7.425 11 7.713 10.712Q8 10.425 8 10Q8 9.575 7.713 9.287Q7.425 9 7 9Q6.575 9 6.287 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11ZM7 14Q7.425 14 7.713 13.712Q8 13.425 8 13Q8 12.575 7.713 12.287Q7.425 12 7 12Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesSharp.displayName = 'AmauiIconMaterialSpeakerNotesSharp';

export default IconMaterialSpeakerNotesSharp;
