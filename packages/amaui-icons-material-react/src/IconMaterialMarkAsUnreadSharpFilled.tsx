import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharpFilled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M2 17V6.25L10.5 2L18.85 6.175V7H16.05L10.5 4.25L4 7.475V17ZM5 21V8H22V21ZM13.5 15.35 20 12V10L13.5 13.35L7 10V12Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadSharpFilled.displayName = 'AmauiIconMaterialMarkAsUnreadSharpFilled';

export default IconMaterialMarkAsUnreadSharpFilled;
