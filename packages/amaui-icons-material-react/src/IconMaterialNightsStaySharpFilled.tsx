import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightsStaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStaySharpFilled'
      short_name='NightsStay'

      {...props}
    >
      <path d="M4 20Q2.75 20 1.875 19.137Q1 18.275 1 17Q1 15.75 1.875 14.875Q2.75 14 4 14Q4.975 14 5.738 14.562Q6.5 15.125 6.8 16H7Q7.825 16 8.412 16.587Q9 17.175 9 18Q9 18.825 8.412 19.413Q7.825 20 7 20ZM8.9 21.5Q9.875 21 10.438 20.05Q11 19.1 11 18Q11 16.425 10.075 15.338Q9.15 14.25 7.5 14Q6.9 13.025 5.925 12.512Q4.95 12 4 12Q3.475 12 2.963 12.113Q2.45 12.225 2 12.45Q1.9 10.3 2.663 8.4Q3.425 6.5 4.788 5.075Q6.15 3.65 8.012 2.825Q9.875 2 12 2Q10.575 4.5 10.663 7.162Q10.75 9.825 12.012 12.012Q13.275 14.2 15.525 15.6Q17.775 17 20.65 17Q19.25 19.375 16.975 20.688Q14.7 22 12.05 22Q11.225 22 10.463 21.887Q9.7 21.775 8.9 21.5Z"/>
    </Icon>
  );
});

IconMaterialNightsStaySharpFilled.displayName = 'AmauiIconMaterialNightsStaySharpFilled';

export default IconMaterialNightsStaySharpFilled;
