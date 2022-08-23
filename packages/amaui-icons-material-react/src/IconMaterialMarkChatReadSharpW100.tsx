import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatReadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadSharpW100'
      short_name='MarkChatRead'

      {...props}
    >
      <path d="M17.35 19.075 14.75 16.45 15.225 15.975 17.35 18.1 21.6 13.85 22.075 14.35ZM3.3 19.5V3.3H20.7V11.65H20V4H4V17.8L5.8 16H12.65V16.7H6.1ZM4 16V17.8V4Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadSharpW100.displayName = 'AmauiIconMaterialMarkChatReadSharpW100';

export default IconMaterialMarkChatReadSharpW100;
