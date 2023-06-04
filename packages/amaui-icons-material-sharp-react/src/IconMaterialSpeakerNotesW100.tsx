import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesW100'

      short_name='SpeakerNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 7.65h7.05v-.7H10.3Zm0 2.7h7.05v-.7H10.3Zm0 2.7h4.05v-.7H10.3ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 6.1V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesW100.displayName = 'AmauiIconMaterialSpeakerNotesW100';

export default IconMaterialSpeakerNotesW100;
