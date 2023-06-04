import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsW100'

      short_name='EmojiFlags'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 20.35V5.3h6.65l.4 2h5.35v7.4h-4.65l-.4-2H7v7.65ZM12.5 10Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsW100.displayName = 'AmauiIconMaterialEmojiFlagsW100';

export default IconMaterialEmojiFlagsW100;
