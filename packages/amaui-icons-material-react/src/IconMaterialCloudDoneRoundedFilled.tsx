import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudDoneRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneRoundedFilled'
      short_name='CloudDone'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20ZM10.35 16.575Q10.55 16.575 10.725 16.512Q10.9 16.45 11.05 16.3L15.275 12.075Q15.575 11.775 15.575 11.35Q15.575 10.925 15.275 10.625Q14.975 10.325 14.55 10.325Q14.125 10.325 13.825 10.625L10.325 14.125L8.925 12.725Q8.65 12.45 8.225 12.45Q7.8 12.45 7.525 12.725Q7.225 13.025 7.225 13.45Q7.225 13.875 7.525 14.15L9.65 16.3Q9.8 16.45 9.975 16.512Q10.15 16.575 10.35 16.575Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneRoundedFilled.displayName = 'AmauiIconMaterialCloudDoneRoundedFilled';

export default IconMaterialCloudDoneRoundedFilled;
