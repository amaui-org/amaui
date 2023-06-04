import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateHalfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateHalfW100Filled'

      short_name='StarRateHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.9v5.9l2.4 1.85-.9-3.05 2.25-1.6h-2.8Zm-3.75 9.65 1.4-4.65-3.6-2.6h4.5L12 6.5l1.45 4.8h4.5l-3.6 2.6 1.4 4.65L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarRateHalfW100Filled.displayName = 'AmauiIconMaterialStarRateHalfW100Filled';

export default IconMaterialStarRateHalfW100Filled;
