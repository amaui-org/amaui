import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Computer'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 6h16v10H4z" opacity=".3"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
    </Icon>
  );
});

IconMaterialComputer.displayName = 'AmauiIconMaterialComputer';

export default IconMaterialComputer;
