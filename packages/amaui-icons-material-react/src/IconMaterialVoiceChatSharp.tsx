import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharp'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7 14H15V11L17 13V7L15 9V6H7ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialVoiceChatSharp;
