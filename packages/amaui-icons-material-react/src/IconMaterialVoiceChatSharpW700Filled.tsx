import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharpW700Filled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7 14H15V11L17 13V7L15 9V6H7ZM1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialVoiceChatSharpW700Filled;
