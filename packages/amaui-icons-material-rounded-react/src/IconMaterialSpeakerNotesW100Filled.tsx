import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesW100Filled'

      short_name='SpeakerNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 7.65H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6.35q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 2.7H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6.35q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 2.7H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.35q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 4.3V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesW100Filled.displayName = 'AmauiIconMaterialSpeakerNotesW100Filled';

export default IconMaterialSpeakerNotesW100Filled;
