import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffW100'

      short_name='SpeakerNotesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.2 13.7q-.275 0-.487-.2-.213-.2-.213-.5t.213-.5q.212-.2.487-.2t.488.2q.212.2.212.5t-.212.5q-.213.2-.488.2Zm12.2 3-.55-.7h.35q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H6.85l-.7-.7H19.2q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.362 1.012-.363.363-.938.488Zm-9.2-9.35-.275-.275V7q0-.15.1-.25t.25-.1H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3 3-.7-.7H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6.1 16.7l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4.3L1.35 2.35q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l18.6 18.6q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125L15.7 16.7ZM4 5v12.8L5.8 16H15Zm8.85 5Zm-3.35.5Zm-2.3.2q-.275 0-.487-.2-.213-.2-.213-.5t.213-.5q.212-.2.487-.2t.488.2q.212.2.212.5t-.212.5q-.213.2-.488.2Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffW100.displayName = 'AmauiIconMaterialSpeakerNotesOffW100';

export default IconMaterialSpeakerNotesOffW100;
