import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarW100Filled'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 19.7V19h2.75v-4.65q-2.15-.325-3.325-1.838Q7.15 11 7.15 9V4.3h9.7V9q0 2-1.175 3.512-1.175 1.513-3.325 1.838V19h2.75v.7ZM7.85 8.65h8.3V5h-8.3Z"/>
    </Icon>
  );
});

IconMaterialWineBarW100Filled.displayName = 'AmauiIconMaterialWineBarW100Filled';

export default IconMaterialWineBarW100Filled;
