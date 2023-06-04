import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Home'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Zm2-2h2v-7h8v7h2v-9l-6-4.5L6 10Zm6-6.75Z"/>
    </Icon>
  );
});

IconMaterialHome.displayName = 'AmauiIconMaterialHome';

export default IconMaterialHome;
