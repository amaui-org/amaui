import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoW100Filled'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-172v-56l28-28H132v-532h696v532H630l28 28v56H302Z"/>
    </Icon>
  );
});

IconMaterialMimoW100Filled.displayName = 'AmauiIconMaterialMimoW100Filled';

export default IconMaterialMimoW100Filled;
