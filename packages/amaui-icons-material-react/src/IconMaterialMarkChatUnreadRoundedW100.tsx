import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadRoundedW100'
      short_name='MarkChatUnread'

      {...props}
    >
      <path d="M6.1 16.7 4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H14.75Q14.7 3.475 14.688 3.637Q14.675 3.8 14.65 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8V17.8L5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V8.475Q20.2 8.425 20.363 8.375Q20.525 8.325 20.7 8.25V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7ZM4 4.8Q4 4.8 4 4.8Q4 4.8 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8V4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4.6 4 4.7Q4 4.8 4 4.8ZM19 6.6Q18.025 6.6 17.338 5.912Q16.65 5.225 16.65 4.25Q16.65 3.275 17.338 2.587Q18.025 1.9 19 1.9Q19.975 1.9 20.663 2.587Q21.35 3.275 21.35 4.25Q21.35 5.225 20.663 5.912Q19.975 6.6 19 6.6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadRoundedW100.displayName = 'AmauiIconMaterialMarkChatUnreadRoundedW100';

export default IconMaterialMarkChatUnreadRoundedW100;
