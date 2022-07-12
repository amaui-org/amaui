import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharpW700'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7 14H15V11L17 13V7L15 9V6H7ZM1.15 22.85V1.15H22.85V18.85H5.15ZM4.3 15.975 4.575 15.7H19.7V4.3H4.3ZM4.3 15.975V4.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialVoiceChatSharpW700;
