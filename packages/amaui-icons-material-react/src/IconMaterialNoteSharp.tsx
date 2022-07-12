import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteSharp'
      short_name='Note'

      {...props}
    >
      <path d="M4 22V2H14L20 8V22ZM6 20H18V9H13V4H6ZM6 20V9V4Z"/>
    </Icon>
  )
});

export default IconMaterialNoteSharp;
