import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6k'

      short_name='6k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3 2.325-3H16.25l-1.75 2.25V9H13Zm-5-3.5v-1h3V9H6.5v6H11v-3.5ZM8 14v-1.5h1.5V14Zm-5 7V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial6k.displayName = 'AmauiIconMaterial6k';

export default IconMaterial6k;
