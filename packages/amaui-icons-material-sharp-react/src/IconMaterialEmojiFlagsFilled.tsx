import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsFilled'

      short_name='EmojiFlags'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsFilled.displayName = 'AmauiIconMaterialEmojiFlagsFilled';

export default IconMaterialEmojiFlagsFilled;
