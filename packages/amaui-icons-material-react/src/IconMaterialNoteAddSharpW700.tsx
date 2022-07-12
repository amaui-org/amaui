import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddSharpW700'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18.275H13V15.275H16V13.275H13V10.275H11V13.275H8V15.275H11ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3V4.3H6.3V19.7H17.7V9.3ZM6.3 4.3V9.3V4.3V9.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddSharpW700;
