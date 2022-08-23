import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatRoundedW100Filled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M8.4 13.35H13.6Q13.925 13.35 14.138 13.137Q14.35 12.925 14.35 12.6V10.4L15.575 11.625Q15.775 11.825 16.012 11.712Q16.25 11.6 16.25 11.325V8.675Q16.25 8.4 16.012 8.287Q15.775 8.175 15.575 8.375L14.35 9.6V7.4Q14.35 7.075 14.138 6.862Q13.925 6.65 13.6 6.65H8.4Q8.075 6.65 7.863 6.862Q7.65 7.075 7.65 7.4V12.6Q7.65 12.925 7.863 13.137Q8.075 13.35 8.4 13.35ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatRoundedW100Filled.displayName = 'AmauiIconMaterialVoiceChatRoundedW100Filled';

export default IconMaterialVoiceChatRoundedW100Filled;
