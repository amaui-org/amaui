import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial22mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='22mp'

      short_name='22mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 11.5H11V10H8V9h3V5.5H6.5V7h3v1h-3Zm6.5 0h4.5V10h-3V9h3V5.5H13V7h3v1h-3ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial22mp.displayName = 'AmauiIconMaterial22mp';

export default IconMaterial22mp;
