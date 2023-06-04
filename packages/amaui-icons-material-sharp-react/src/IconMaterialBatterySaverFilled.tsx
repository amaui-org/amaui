import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatterySaverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverFilled'

      short_name='BatterySaver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm4-6h2v-2h2v-2h-2v-2h-2v2H9v2h2Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverFilled.displayName = 'AmauiIconMaterialBatterySaverFilled';

export default IconMaterialBatterySaverFilled;
