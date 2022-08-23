import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffRoundedFilled'
      short_name='CloudOff'

      {...props}
    >
      <path d="M19.1 21.9 17.15 20H6.5Q4.2 20 2.6 18.4Q1 16.8 1 14.5Q1 12.575 2.188 11.075Q3.375 9.575 5.25 9.15Q5.325 8.95 5.4 8.762Q5.475 8.575 5.55 8.35L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.188Q19.375 22.2 19.1 21.9ZM21.6 18.75 8.05 5.225Q8.925 4.625 9.913 4.312Q10.9 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 16.475 22.625 17.312Q22.25 18.15 21.6 18.75Z"/>
    </Icon>
  );
});

IconMaterialCloudOffRoundedFilled.displayName = 'AmauiIconMaterialCloudOffRoundedFilled';

export default IconMaterialCloudOffRoundedFilled;
