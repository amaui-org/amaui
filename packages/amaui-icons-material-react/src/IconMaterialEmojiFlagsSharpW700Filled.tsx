import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsSharpW700Filled'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M4.15 21.85V3.15H14.7l.4 2h5.75v11.7H12.3l-.4-2H7.3v7Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsSharpW700Filled;
