import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatReadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadSharpFilled'
      short_name='MarkChatRead'

      {...props}
    >
      <path d="M17.35 20 13.825 16.45 15.225 15.05 17.35 17.175 21.6 12.925 23 14.35ZM2 22V2H22V11H12V18H6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadSharpFilled.displayName = 'AmauiIconMaterialMarkChatReadSharpFilled';

export default IconMaterialMarkChatReadSharpFilled;
