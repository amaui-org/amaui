import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsSharpW700'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M4.15 21.85V3.15H14.7l.4 2h5.75v11.7H12.3l-.4-2H7.3v7ZM12.5 10Zm2.425 3.7H17.7V8.3h-5.225l-.4-2H7.3v5.4h7.225Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsSharpW700;
