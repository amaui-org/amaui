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
      <path d="m19.4 16.7-6.275-6.35h4.225v-.7h-4.925L10.2 7.35h7.15v-.7H9.925v.425L6.15 3.3H20.7v13.4Zm-12.2-3q.275 0 .488-.2.212-.2.212-.5t-.212-.5q-.213-.2-.488-.2t-.487.2q-.213.2-.213.5t.213.5q.212.2.487.2Zm0-3q.275 0 .488-.2.212-.2.212-.5t-.212-.5q-.213-.2-.488-.2t-.487.2q-.213.2-.213.5t.213.5q.212.2.487.2Zm13 10.5-4.5-4.5H6.1l-2.8 2.8V4H4l6.7 6.7h-1L1.1 2.1l.5-.5 19.1 19.1Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffW100Filled.displayName = 'AmauiIconMaterialSpeakerNotesOffW100Filled';

export default IconMaterialSpeakerNotesOffW100Filled;
