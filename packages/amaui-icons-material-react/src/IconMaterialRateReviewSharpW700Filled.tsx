import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewSharpW700Filled'
      short_name='RateReview'

      {...props}
    >
      <path d="M10.5 14H18V12H12.5ZM6 14H8.45L14.725 7.775L12.225 5.275L6 11.55ZM1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialRateReviewSharpW700Filled;
