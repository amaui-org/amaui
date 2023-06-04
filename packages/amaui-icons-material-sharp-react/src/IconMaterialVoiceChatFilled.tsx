import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatFilled'

      short_name='VoiceChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 15h1.5V5h-1.5ZM8.5 13H10V7H8.5ZM6 11h1.5V9H6Zm8 2h1.5V7H14Zm2.5-2H18V9h-1.5ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatFilled.displayName = 'AmauiIconMaterialVoiceChatFilled';

export default IconMaterialVoiceChatFilled;
