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
      <path d="M7.2 13.7q-.275 0-.487-.2-.213-.2-.213-.5t.213-.5q.212-.2.487-.2t.488.2q.212.2.212.5t-.212.5q-.213.2-.488.2Zm12.3 3-.65-.7H20V4H6.85l-.7-.7H20.7v13.4Zm-6.3-6.35-.7-.7h4.85v.7Zm7 10.85-4.5-4.5H6.1l-2.8 2.8V4.3L1.1 2.1l.5-.5 19.1 19.1ZM4 5v12.8L5.8 16H15Zm8.85 5Zm-3.35.5Zm-2.3.2q-.275 0-.487-.2-.213-.2-.213-.5t.213-.5q.212-.2.487-.2t.488.2q.212.2.212.5t-.212.5q-.213.2-.488.2Zm3-3.35-.275-.275V6.65h7.425v.7Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotesOffW100.displayName = 'AmauiIconMaterialSpeakerNotesOffW100';

export default IconMaterialSpeakerNotesOffW100;
