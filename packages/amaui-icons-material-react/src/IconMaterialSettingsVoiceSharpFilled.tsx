import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsVoiceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceSharpFilled'
      short_name='SettingsVoice'

      {...props}
    >
      <path d="M8 24Q7.575 24 7.287 23.712Q7 23.425 7 23Q7 22.575 7.287 22.288Q7.575 22 8 22Q8.425 22 8.713 22.288Q9 22.575 9 23Q9 23.425 8.713 23.712Q8.425 24 8 24ZM12 24Q11.575 24 11.288 23.712Q11 23.425 11 23Q11 22.575 11.288 22.288Q11.575 22 12 22Q12.425 22 12.713 22.288Q13 22.575 13 23Q13 23.425 12.713 23.712Q12.425 24 12 24ZM16 24Q15.575 24 15.288 23.712Q15 23.425 15 23Q15 22.575 15.288 22.288Q15.575 22 16 22Q16.425 22 16.712 22.288Q17 22.575 17 23Q17 23.425 16.712 23.712Q16.425 24 16 24ZM12 14Q10.75 14 9.875 13.125Q9 12.25 9 11V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 12.25 14.125 13.125Q13.25 14 12 14ZM11 21V17.9Q8.4 17.55 6.7 15.588Q5 13.625 5 11H7Q7 13.075 8.463 14.537Q9.925 16 12 16Q14.075 16 15.538 14.537Q17 13.075 17 11H19Q19 13.625 17.3 15.588Q15.6 17.55 13 17.9V21Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceSharpFilled.displayName = 'AmauiIconMaterialSettingsVoiceSharpFilled';

export default IconMaterialSettingsVoiceSharpFilled;
