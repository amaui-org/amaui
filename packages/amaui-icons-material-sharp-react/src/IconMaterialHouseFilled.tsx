import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseFilled'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-8H2l10-9 4 3.6V4h3v5.3l3 2.7h-3v8h-5v-6h-4v6Zm5-9.975h4q0-.8-.6-1.313Q12.8 8.2 12 8.2q-.8 0-1.4.512-.6.513-.6 1.313Z"/>
    </Icon>
  );
});

IconMaterialHouseFilled.displayName = 'AmauiIconMaterialHouseFilled';

export default IconMaterialHouseFilled;
