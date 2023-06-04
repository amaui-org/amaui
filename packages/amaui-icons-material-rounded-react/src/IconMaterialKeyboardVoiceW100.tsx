import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardVoiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardVoiceW100'

      short_name='KeyboardVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.7q-.725 0-1.212-.488Q10.3 11.725 10.3 11V5q0-.725.488-1.213Q11.275 3.3 12 3.3t1.213.487Q13.7 4.275 13.7 5v6q0 .725-.487 1.212-.488.488-1.213.488ZM12 8Zm0 12.35q-.15 0-.25-.1t-.1-.25v-3.3q-2.175-.175-3.7-1.688Q6.425 13.5 6.3 11.35q0-.15.1-.25t.25-.1q.125 0 .225.1t.125.25q.125 1.95 1.575 3.3Q10.025 16 12 16q1.975 0 3.425-1.35 1.45-1.35 1.575-3.3.025-.15.113-.25.087-.1.237-.1t.25.1q.1.1.1.25-.125 2.15-1.65 3.662-1.525 1.513-3.7 1.688V20q0 .15-.1.25t-.25.1ZM12 12q.425 0 .713-.288Q13 11.425 13 11V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5v6q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialKeyboardVoiceW100.displayName = 'AmauiIconMaterialKeyboardVoiceW100';

export default IconMaterialKeyboardVoiceW100;
