import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteSharpW100'
      short_name='Note'

      {...props}
    >
      <path d="M5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM6 20H18V7.7H14.3V4H6ZM6 20V7.7V4Z"/>
    </Icon>
  );
});

IconMaterialNoteSharpW100.displayName = 'AmauiIconMaterialNoteSharpW100';

export default IconMaterialNoteSharpW100;
