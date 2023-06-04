import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6mp'

      short_name='6mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.5h4.5V8h-3V7h3V5.5H10Zm1.5-1V9H13v1.5ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial6mp.displayName = 'AmauiIconMaterial6mp';

export default IconMaterial6mp;
