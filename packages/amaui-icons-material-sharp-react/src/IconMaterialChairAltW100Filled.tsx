import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100Filled'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 19.45V12.3h2.35v-2.1H6.8V5.05h10.4v5.15h-2.35v2.1h2.35v7.15h-.7v-3h-9v3Zm3.05-7.15h4.3v-2.1h-4.3Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100Filled.displayName = 'AmauiIconMaterialChairAltW100Filled';

export default IconMaterialChairAltW100Filled;
