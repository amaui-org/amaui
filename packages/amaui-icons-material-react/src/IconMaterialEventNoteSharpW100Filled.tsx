import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventNoteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteSharpW100Filled'
      short_name='EventNote'

      {...props}
    >
      <path d="M7.65 13.35V12.65H16.35V13.35ZM7.65 17.35V16.65H13.35V17.35ZM4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5Z"/>
    </Icon>
  );
});

IconMaterialEventNoteSharpW100Filled.displayName = 'AmauiIconMaterialEventNoteSharpW100Filled';

export default IconMaterialEventNoteSharpW100Filled;
