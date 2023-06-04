import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVoiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceW100Filled'

      short_name='SettingsVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-4-11q-.725 0-1.212-.488Q10.3 11.725 10.3 11V5q0-.725.488-1.213Q11.275 3.3 12 3.3t1.213.487Q13.7 4.275 13.7 5v6q0 .725-.487 1.212-.488.488-1.213.488Zm0 7.65q-.15 0-.25-.1t-.1-.25v-3.25q-2.175-.2-3.7-1.725Q6.425 13.5 6.3 11.35q0-.15.1-.25t.25-.1q.125 0 .225.1t.125.25q.125 1.95 1.575 3.3Q10.025 16 12 16q1.975 0 3.425-1.35 1.45-1.35 1.575-3.3.025-.15.113-.25.087-.1.237-.1t.25.1q.1.1.1.25-.125 2.15-1.65 3.675t-3.7 1.725V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceW100Filled.displayName = 'AmauiIconMaterialSettingsVoiceW100Filled';

export default IconMaterialSettingsVoiceW100Filled;
