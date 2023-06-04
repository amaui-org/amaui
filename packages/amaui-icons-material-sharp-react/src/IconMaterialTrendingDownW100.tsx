import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownW100'

      short_name='TrendingDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.525 17.35v-.7h3.55l-6.8-6.7-4 4-6.5-6.55.5-.5 6 6 4-4 7.25 7.25v-3.5h.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownW100.displayName = 'AmauiIconMaterialTrendingDownW100';

export default IconMaterialTrendingDownW100;
