import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharp'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M2 17V6.25L10.5 2L18.85 6.175V7H16.05L10.5 4.25L4 7.475V17ZM5 21V8H22V21ZM13.5 15.35 7 12V19H20V12ZM13.5 13.35 20 10H7ZM7 19V10V19Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadSharp.displayName = 'AmauiIconMaterialMarkAsUnreadSharp';

export default IconMaterialMarkAsUnreadSharp;
