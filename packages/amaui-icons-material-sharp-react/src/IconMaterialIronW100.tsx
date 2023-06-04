import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIronW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronW100'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.625 16.7v-1.8q0-1.275.912-2.188.913-.912 2.188-.912h8.6V9H9.45v1.65h-.7V8.3h7.275v6.3h1.65V7.3h2.7V8h-2v7.3h-2.35v1.4Zm.7-.7h11v-3.5h-8.6q-1 0-1.7.7t-.7 1.7Zm11 0v-3.5V16Z"/>
    </Icon>
  );
});

IconMaterialIronW100.displayName = 'AmauiIconMaterialIronW100';

export default IconMaterialIronW100;
