import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIronW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronW100Filled'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.625 16.7v-1.8q0-1.275.912-2.188.913-.912 2.188-.912h8.6V9H9.45v1.65h-.7V8.3h7.275v6.3h1.65V7.3h2.7V8h-2v7.3h-2.35v1.4Z"/>
    </Icon>
  );
});

IconMaterialIronW100Filled.displayName = 'AmauiIconMaterialIronW100Filled';

export default IconMaterialIronW100Filled;
