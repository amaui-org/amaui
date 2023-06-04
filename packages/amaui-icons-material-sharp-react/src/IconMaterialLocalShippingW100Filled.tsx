import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalShippingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShippingW100Filled'

      short_name='LocalShipping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.6 18.85q-1.05 0-1.775-.725Q3.1 17.4 3.1 16.35H1.9V5.3h14.5v3.5h2.1l3.6 4.85v2.7h-1.5q0 1.05-.725 1.775-.725.725-1.775.725-1.05 0-1.775-.725-.725-.725-.725-1.775H8.1q0 1.05-.725 1.775-.725.725-1.775.725Zm.025-.7q.725 0 1.25-.538.525-.537.525-1.287 0-.725-.525-1.25t-1.25-.525q-.75 0-1.287.525-.538.525-.538 1.25 0 .75.538 1.287.537.538 1.287.538Zm12.5 0q.725 0 1.25-.538.525-.537.525-1.287 0-.725-.525-1.25t-1.25-.525q-.75 0-1.288.525-.537.525-.537 1.25 0 .75.537 1.287.538.538 1.288.538Zm-1.725-4.5h4.85L18.1 9.5h-1.7Z"/>
    </Icon>
  );
});

IconMaterialLocalShippingW100Filled.displayName = 'AmauiIconMaterialLocalShippingW100Filled';

export default IconMaterialLocalShippingW100Filled;
