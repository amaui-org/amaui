import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventNoteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteSharp'
      short_name='EventNote'

      {...props}
    >
      <path d="M7 14V12H17V14ZM7 18V16H14V18ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialEventNoteSharp.displayName = 'AmauiIconMaterialEventNoteSharp';

export default IconMaterialEventNoteSharp;
