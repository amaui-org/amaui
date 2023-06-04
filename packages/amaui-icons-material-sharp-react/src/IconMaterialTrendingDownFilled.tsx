import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownFilled'

      short_name='TrendingDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 18v-2h2.6l-5.2-5.15-4 4L2 7.4 3.4 6l6 6 4-4 6.6 6.6V12h2v6Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownFilled.displayName = 'AmauiIconMaterialTrendingDownFilled';

export default IconMaterialTrendingDownFilled;
