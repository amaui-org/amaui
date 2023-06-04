import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUp'

      short_name='TrendingUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 18 2 16.6l7.4-7.45 4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4Z"/>
    </Icon>
  );
});

IconMaterialTrendingUp.displayName = 'AmauiIconMaterialTrendingUp';

export default IconMaterialTrendingUp;
