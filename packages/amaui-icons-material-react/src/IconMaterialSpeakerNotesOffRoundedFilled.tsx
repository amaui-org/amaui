import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffRoundedFilled'
      short_name='SpeakerNotesOff'

      {...props}
    >
      <path d="M6 18 3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4.8L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.488 21.888Q21.5 22.3 21.2 22.6Q20.925 22.875 20.513 22.875Q20.1 22.875 19.8 22.6L15.15 18ZM20.7 17.85 13.85 11H17Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H11.85L10.85 8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H11Q10.575 6 10.288 6.287Q10 6.575 10 7V7.15L4.85 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.65 21.638 17.137Q21.275 17.625 20.7 17.85ZM7 14Q7.425 14 7.713 13.712Q8 13.425 8 13Q8 12.575 7.713 12.287Q7.425 12 7 12Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM7 11Q7.425 11 7.713 10.712Q8 10.425 8 10Q8 9.575 7.713 9.287Q7.425 9 7 9Q6.575 9 6.287 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffRoundedFilled.displayName = 'AmauiIconMaterialSpeakerNotesOffRoundedFilled';

export default IconMaterialSpeakerNotesOffRoundedFilled;
