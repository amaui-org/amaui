import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdate'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 19h10V5H7v14zm4-6V8h2v5h3l-4 4-4-4h3z" opacity=".3"/><path d="M16 13h-3V8h-2v5H8l4 4zm1-11.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </Icon>
  );
});

IconMaterialSystemUpdate.displayName = 'AmauiIconMaterialSystemUpdate';

export default IconMaterialSystemUpdate;
