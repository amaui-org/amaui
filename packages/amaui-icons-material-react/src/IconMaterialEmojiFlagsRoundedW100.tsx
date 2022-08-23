import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsRoundedW100'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M6.65 20.35q-.15 0-.25-.1T6.3 20V6.05q0-.325.213-.538.212-.212.537-.212h5.275q.275 0 .487.163.213.162.263.437l.275 1.4h4.6q.325 0 .538.212.212.213.212.538v5.9q0 .325-.212.537-.213.213-.538.213h-3.275q-.275 0-.487-.163-.213-.162-.263-.437l-.275-1.4H7V20q0 .15-.1.25t-.25.1ZM12.5 10Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsRoundedW100.displayName = 'AmauiIconMaterialEmojiFlagsRoundedW100';

export default IconMaterialEmojiFlagsRoundedW100;
