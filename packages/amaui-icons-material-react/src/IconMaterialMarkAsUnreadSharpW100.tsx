import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharpW100'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M2.975 16.2V6.675L10.825 2.75L18.525 6.6V7.15H18.075L10.825 3.55L3.675 7.1V16.2ZM6.625 19.7V9.3H21.025V19.7ZM13.825 14.15 7.325 10.8V19H20.325V10.8ZM13.825 13.35 20.325 10H7.325ZM7.325 19V10V19Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadSharpW100.displayName = 'AmauiIconMaterialMarkAsUnreadSharpW100';

export default IconMaterialMarkAsUnreadSharpW100;
