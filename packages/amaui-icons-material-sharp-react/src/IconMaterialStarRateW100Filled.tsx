import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100Filled'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.25 18.55 1.4-4.65-3.6-2.6h4.5L12 6.5l1.45 4.8h4.5l-3.6 2.6 1.4 4.65L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100Filled.displayName = 'AmauiIconMaterialStarRateW100Filled';

export default IconMaterialStarRateW100Filled;
