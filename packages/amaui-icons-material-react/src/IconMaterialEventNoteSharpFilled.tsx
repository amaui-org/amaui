import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventNoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteSharpFilled'
      short_name='EventNote'

      {...props}
    >
      <path d="M7 14V12H17V14ZM7 18V16H14V18ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5Z"/>
    </Icon>
  );
});

export default IconMaterialEventNoteSharpFilled;
