import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tv'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5h18v12H3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
    </Icon>
  );
});

IconMaterialTv.displayName = 'AmauiIconMaterialTv';

export default IconMaterialTv;
