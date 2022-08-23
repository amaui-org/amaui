import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddSharp'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM4 22V2H14L20 8V22ZM13 9V4H6V20H18V9ZM6 4V9V4V9V20Z"/>
    </Icon>
  );
});

IconMaterialNoteAddSharp.displayName = 'AmauiIconMaterialNoteAddSharp';

export default IconMaterialNoteAddSharp;
