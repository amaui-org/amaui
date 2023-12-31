import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoW100'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-172v-56l28-28H132v-532h696v532H630l28 28v56H302ZM160-284h640v-476H160v476Zm0 0v-476 476Z"/>
    </Icon>
  );
});

IconMaterialMimoW100.displayName = 'AmauiIconMaterialMimoW100';

export default IconMaterialMimoW100;
