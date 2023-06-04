import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatW100Filled'

      short_name='VoiceChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35q.15 0 .25-.1t.1-.25V6q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v8q0 .15.1.25t.25.1Zm-2.75-2q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1T8.9 8v4q0 .15.1.25t.25.1Zm-2.5-2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm8 2q.15 0 .25-.1t.1-.25V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4q0 .15.1.25t.25.1Zm2.5-2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatW100Filled.displayName = 'AmauiIconMaterialVoiceChatW100Filled';

export default IconMaterialVoiceChatW100Filled;
