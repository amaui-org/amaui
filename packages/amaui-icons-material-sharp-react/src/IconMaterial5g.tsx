import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5g = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5g'

      short_name='5g'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17v-2h5v-2H3V7h7v2H5v2h5v6Zm9 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6Z"/>
    </Icon>
  );
});

IconMaterial5g.displayName = 'AmauiIconMaterial5g';

export default IconMaterial5g;
