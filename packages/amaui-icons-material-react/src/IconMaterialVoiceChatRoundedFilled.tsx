import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatRoundedFilled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M8 14H14Q14.425 14 14.713 13.712Q15 13.425 15 13V11L16.15 12.15Q16.375 12.375 16.688 12.262Q17 12.15 17 11.8V8.2Q17 7.85 16.688 7.737Q16.375 7.625 16.15 7.85L15 9V7Q15 6.575 14.713 6.287Q14.425 6 14 6H8Q7.575 6 7.287 6.287Q7 6.575 7 7V13Q7 13.425 7.287 13.712Q7.575 14 8 14ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatRoundedFilled.displayName = 'AmauiIconMaterialVoiceChatRoundedFilled';

export default IconMaterialVoiceChatRoundedFilled;
