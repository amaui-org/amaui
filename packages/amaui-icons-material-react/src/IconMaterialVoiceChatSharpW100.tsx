import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVoiceChatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatSharpW100'
      short_name='VoiceChat'

      {...props}
    >
      <path d="M7.65 13.35H14.35V10.4L16.25 12.3V7.7L14.35 9.6V6.65H7.65ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatSharpW100.displayName = 'AmauiIconMaterialVoiceChatSharpW100';

export default IconMaterialVoiceChatSharpW100;
