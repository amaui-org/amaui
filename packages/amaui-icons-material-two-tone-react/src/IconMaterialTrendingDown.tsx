import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDown'

      short_name='TrendingDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"/>
    </Icon>
  );
});

IconMaterialTrendingDown.displayName = 'AmauiIconMaterialTrendingDown';

export default IconMaterialTrendingDown;
