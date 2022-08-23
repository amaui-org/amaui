import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingDownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownSharpFilled'
      short_name='TrendingDown'

      {...props}
    >
      <path d="M2 7.4 3.4 6 9.4 12 13.4 8 20 14.6V12H22V18H16V16H18.6L13.4 10.85L9.4 14.85Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownSharpFilled.displayName = 'AmauiIconMaterialTrendingDownSharpFilled';

export default IconMaterialTrendingDownSharpFilled;
