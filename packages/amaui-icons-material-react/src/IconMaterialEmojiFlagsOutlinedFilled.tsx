import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsOutlinedFilled'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsOutlinedFilled;
