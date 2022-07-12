import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesSharpW700Filled'
      short_name='Notes'

      {...props}
    >
      <path d="M2.425 13.575V10.425H21.575V13.575ZM2.425 18.95V15.8H15.575V18.95ZM2.425 8.2V5.05H21.575V8.2Z"/>
    </Icon>
  )
});

export default IconMaterialNotesSharpW700Filled;
