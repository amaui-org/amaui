import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsOutlinedW100Filled'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M6.3 20.35V5.3h6.65l.4 2h5.35v7.4h-4.65l-.4-2H7v7.65Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsOutlinedW100Filled;
