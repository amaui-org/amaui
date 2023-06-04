import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChat'

      short_name='VoiceChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM7 7h7v2.4L17 7v6l-3-2.4V13H7V7z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-6-5.4l3 2.4V7l-3 2.4V7H7v6h7z"/>
    </Icon>
  );
});

IconMaterialVoiceChat.displayName = 'AmauiIconMaterialVoiceChat';

export default IconMaterialVoiceChat;
