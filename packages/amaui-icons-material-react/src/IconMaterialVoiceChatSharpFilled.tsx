import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharpFilled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7 14H15V11L17 13V7L15 9V6H7ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatSharpFilled.displayName = 'AmauiIconMaterialVoiceChatSharpFilled';

export default IconMaterialVoiceChatSharpFilled;
