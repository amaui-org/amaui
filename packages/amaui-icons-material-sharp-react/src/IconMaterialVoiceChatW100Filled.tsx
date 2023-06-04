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
      <path d="M11.65 14.35h.7v-8.7h-.7Zm-2.75-2h.7v-4.7h-.7Zm-2.5-2h.7v-.7h-.7Zm8 2h.7v-4.7h-.7Zm2.5-2h.7v-.7h-.7ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatW100Filled.displayName = 'AmauiIconMaterialVoiceChatW100Filled';

export default IconMaterialVoiceChatW100Filled;
