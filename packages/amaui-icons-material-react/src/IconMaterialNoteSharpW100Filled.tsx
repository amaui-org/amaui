import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteSharpW100Filled'
      short_name='Note'

      {...props}
    >
      <path d="M5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7H18L14.3 4Z"/>
    </Icon>
  );
});

export default IconMaterialNoteSharpW100Filled;
