import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.6 16.65 12 14.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6Zm-1.35 1.9 1.4-4.65-3.6-2.6h4.5L12 6.5l1.45 4.8h4.5l-3.6 2.6 1.4 4.65L12 15.7ZM12 12.775Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100.displayName = 'AmauiIconMaterialStarRateW100';

export default IconMaterialStarRateW100;
