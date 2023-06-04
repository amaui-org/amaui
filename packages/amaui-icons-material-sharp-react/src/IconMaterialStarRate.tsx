import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRate'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.6 16.65 12 14.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6ZM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4 2.325 7.6L12 17.3ZM12 12.775Z"/>
    </Icon>
  );
});

IconMaterialStarRate.displayName = 'AmauiIconMaterialStarRate';

export default IconMaterialStarRate;
