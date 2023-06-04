import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesOffW100Filled'

      short_name='SpeakerNotesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.1 16.7-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7V4H4l6.7 6.7h-1L1.35 2.35q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l18.6 18.6q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125L15.7 16.7Zm13.3 0-6.275-6.35H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.575l-2.275-2.3H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6.5q-.15 0-.25.1t-.1.25v.35l-4-4.05H19.2q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.362 1.012-.363.363-.938.488Zm-12.2-3q.275 0 .488-.2.212-.2.212-.5t-.212-.5q-.213-.2-.488-.2t-.487.2q-.213.2-.213.5t.213.5q.212.2.487.2Zm0-3q.275 0 .488-.2.212-.2.212-.5t-.212-.5q-.213-.2-.488-.2t-.487.2q-.213.2-.213.5t.213.5q.212.2.487.2Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffW100Filled.displayName = 'AmauiIconMaterialSpeakerNotesOffW100Filled';

export default IconMaterialSpeakerNotesOffW100Filled;
