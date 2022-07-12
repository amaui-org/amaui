import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddSharpW700Filled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18.275H13V15.275H16V13.275H13V10.275H11V13.275H8V15.275H11ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3H17.7L12.7 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddSharpW700Filled;
