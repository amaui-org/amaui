import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharpW100Filled'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7.65 13.35H14.35V10.4L16.25 12.3V7.7L14.35 9.6V6.65H7.65ZM3.3 19.5V3.3H20.7V16.7H6.1Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatSharpW100Filled.displayName = 'AmauiIconMaterialVoiceChatSharpW100Filled';

export default IconMaterialVoiceChatSharpW100Filled;
