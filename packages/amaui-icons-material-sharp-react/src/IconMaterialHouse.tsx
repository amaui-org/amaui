import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='House'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-8H2l10-9 4 3.6V4h3v5.3l3 2.7h-3v8h-6v-6h-2v6Zm2-2h2v-6h6v6h2v-7.8l-5-4.5-5 4.5Zm2-6h6-6Zm1-1.975h4q0-.8-.6-1.313Q12.8 8.2 12 8.2q-.8 0-1.4.512-.6.513-.6 1.313Z"/>
    </Icon>
  );
});

IconMaterialHouse.displayName = 'AmauiIconMaterialHouse';

export default IconMaterialHouse;
