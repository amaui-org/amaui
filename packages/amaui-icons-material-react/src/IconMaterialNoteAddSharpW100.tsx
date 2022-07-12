import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddSharpW100'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11.65 17.35H12.35V14.35H15.35V13.65H12.35V10.65H11.65V13.65H8.65V14.35H11.65ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7V4H6V20H18V7.7ZM6 4V7.7V4V7.7V20Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddSharpW100;
