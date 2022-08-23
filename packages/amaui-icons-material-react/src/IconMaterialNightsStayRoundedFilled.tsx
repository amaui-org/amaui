import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightsStayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayRoundedFilled'
      short_name='NightsStay'

      {...props}
    >
      <path d="M12.05 22Q11.225 22 10.463 21.887Q9.7 21.775 8.9 21.5Q9.425 21.225 9.838 20.8Q10.25 20.375 10.55 19.85Q10.75 19.525 10.875 19.05Q11 18.575 11 18Q11 16.425 10.075 15.338Q9.15 14.25 7.5 14Q6.9 13.025 5.925 12.512Q4.95 12 4 12Q3.475 12 2.963 12.113Q2.45 12.225 2 12.45Q1.925 10.45 2.587 8.65Q3.25 6.85 4.475 5.45Q5.7 4.05 7.375 3.15Q9.05 2.25 11 2.05Q11.4 2 11.562 2.25Q11.725 2.5 11.55 2.9Q10.5 5.225 10.688 7.625Q10.875 10.025 12.012 12.012Q13.15 14 15.125 15.35Q17.1 16.7 19.65 16.95Q20.075 17 20.213 17.262Q20.35 17.525 20.1 17.85Q18.675 19.85 16.562 20.925Q14.45 22 12.05 22ZM7 20H4Q2.75 20 1.875 19.137Q1 18.275 1 17Q1 15.75 1.875 14.875Q2.75 14 4 14Q4.975 14 5.738 14.562Q6.5 15.125 6.8 16H7Q7.825 16 8.412 16.587Q9 17.175 9 18Q9 18.825 8.412 19.413Q7.825 20 7 20Z"/>
    </Icon>
  );
});

IconMaterialNightsStayRoundedFilled.displayName = 'AmauiIconMaterialNightsStayRoundedFilled';

export default IconMaterialNightsStayRoundedFilled;
