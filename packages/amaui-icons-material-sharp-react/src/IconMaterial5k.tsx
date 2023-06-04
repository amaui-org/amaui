import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5k'

      short_name='5k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3 2.325-3H16.25l-1.75 2.25V9H13Zm-6.5 0H11v-3.5H8v-1h3V9H6.5v3.5h3v1h-3ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial5k.displayName = 'AmauiIconMaterial5k';

export default IconMaterial5k;
