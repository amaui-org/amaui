import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsOutlined'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Zm7.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsOutlined;
