import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageRoundedFilled'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14.075Q14.5 2 14.913 2.188Q15.325 2.375 15.6 2.725L19.525 7.45Q19.75 7.725 19.875 8.05Q20 8.375 20 8.725V19.55L15.45 15Q15.725 14.575 15.863 14.075Q16 13.575 16 13Q16 11.35 14.825 10.175Q13.65 9 12 9Q10.35 9 9.175 10.175Q8 11.35 8 13Q8 14.65 9.175 15.825Q10.35 17 12 17Q12.575 17 13.075 16.863Q13.575 16.725 14 16.45L19.2 21.6Q18.925 21.8 18.65 21.9Q18.375 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialFindInPageRoundedFilled.displayName = 'AmauiIconMaterialFindInPageRoundedFilled';

export default IconMaterialFindInPageRoundedFilled;
