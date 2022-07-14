import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteSharpFilled'
      short_name='EditNote'

      {...props}
    >
      <path d="M20.125 15 18 12.875 19.425 11.45 21.55 13.575ZM12 21V18.875L17.3 13.575L19.425 15.7L14.125 21ZM3 16V14H10V16ZM3 12V10H14V12ZM3 8V6H14V8Z"/>
    </Icon>
  );
});

export default IconMaterialEditNoteSharpFilled;
