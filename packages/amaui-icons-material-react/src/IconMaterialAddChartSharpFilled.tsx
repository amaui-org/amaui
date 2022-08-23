import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartSharpFilled'
      short_name='AddChart'

      {...props}
    >
      <path d="M7 17H9V10H7ZM11 17H13V7H11ZM15 17H17V13H15ZM3 21V3H14V5H5V19H19V10H21V21ZM17 9V7H15V5H17V3H19V5H21V7H19V9Z"/>
    </Icon>
  );
});

IconMaterialAddChartSharpFilled.displayName = 'AmauiIconMaterialAddChartSharpFilled';

export default IconMaterialAddChartSharpFilled;
