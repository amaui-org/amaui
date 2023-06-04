import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeHealthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthW100'

      short_name='HomeHealth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.15 16.35h1.7v-2.5h2.5v-1.7h-2.5v-2.5h-1.7v2.5h-2.5v1.7h2.5ZM5.3 19.7V9.65L12 4.6l6.7 5.05V19.7ZM6 19h12v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthW100.displayName = 'AmauiIconMaterialHomeHealthW100';

export default IconMaterialHomeHealthW100;
