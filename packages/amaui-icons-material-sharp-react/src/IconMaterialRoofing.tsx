import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoofing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Roofing'

      short_name='Roofing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2 12 10-9 4 3.6V4h3v5.3l3 2.7h-3l-7-6.3L5 12Zm7 8v-6h6v6Zm2-2h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialRoofing.displayName = 'AmauiIconMaterialRoofing';

export default IconMaterialRoofing;
