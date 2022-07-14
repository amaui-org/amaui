import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddSharpFilled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM4 22V2H14L20 8V22ZM13 9H18L13 4Z"/>
    </Icon>
  );
});

export default IconMaterialNoteAddSharpFilled;
