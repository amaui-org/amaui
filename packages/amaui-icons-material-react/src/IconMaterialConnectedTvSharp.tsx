import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectedTvSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvSharp'
      short_name='ConnectedTv'

      {...props}
    >
      <path d="M5 16H7Q7 15.175 6.412 14.587Q5.825 14 5 14ZM8.55 16H10Q10 13.925 8.537 12.462Q7.075 11 5 11V12.45Q6.475 12.45 7.513 13.488Q8.55 14.525 8.55 16ZM11.55 16H13Q13 14.35 12.375 12.887Q11.75 11.425 10.663 10.337Q9.575 9.25 8.113 8.625Q6.65 8 5 8V9.45Q7.725 9.45 9.638 11.362Q11.55 13.275 11.55 16ZM8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvSharp.displayName = 'AmauiIconMaterialConnectedTvSharp';

export default IconMaterialConnectedTvSharp;
