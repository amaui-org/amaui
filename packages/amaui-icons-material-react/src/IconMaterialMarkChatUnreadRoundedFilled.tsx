import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadRoundedFilled'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M19 6Q17.75 6 16.875 5.125Q16 4.25 16 3Q16 1.75 16.875 0.875Q17.75 0 19 0Q20.25 0 21.125 0.875Q22 1.75 22 3Q22 4.25 21.125 5.125Q20.25 6 19 6ZM6 18 3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H14.1Q14 2.5 14 3Q14 3.5 14.1 4Q14.45 5.725 15.825 6.862Q17.2 8 19 8Q19.8 8 20.575 7.75Q21.35 7.5 22 7V16Q22 16.825 21.413 17.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadRoundedFilled.displayName = 'AmauiIconMaterialMarkChatUnreadRoundedFilled';

export default IconMaterialMarkChatUnreadRoundedFilled;
