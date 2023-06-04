import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial9mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='9mp'

      short_name='9mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.5h4.5v-6H10V9h3v1h-3ZM11.5 8V6.5H13V8ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial9mp.displayName = 'AmauiIconMaterial9mp';

export default IconMaterial9mp;
