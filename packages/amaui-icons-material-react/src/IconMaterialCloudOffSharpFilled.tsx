import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffSharpFilled'
      short_name='CloudOff'

      {...props}
    >
      <path d="M21.6 18.75 8.05 5.225Q8.925 4.625 9.913 4.312Q10.9 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 16.475 22.625 17.312Q22.25 18.15 21.6 18.75ZM19.8 22.6 17.15 20H6.5Q4.2 20 2.6 18.4Q1 16.8 1 14.5Q1 12.575 2.188 11.075Q3.375 9.575 5.25 9.15Q5.325 8.95 5.4 8.762Q5.475 8.575 5.55 8.35L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialCloudOffSharpFilled.displayName = 'AmauiIconMaterialCloudOffSharpFilled';

export default IconMaterialCloudOffSharpFilled;
