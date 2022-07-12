import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownTwoTone'
      short_name='TrendingDown'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"/>
    </Icon>
  )
});

export default IconMaterialTrendingDownTwoTone;
