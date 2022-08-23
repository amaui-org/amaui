import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatchPredictionRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionRoundedFilled'
      short_name='BatchPrediction'

      {...props}
    >
      <path d="M7 22Q6.175 22 5.588 21.413Q5 20.825 5 20V10Q5 9.175 5.588 8.587Q6.175 8 7 8H17Q17.825 8 18.413 8.587Q19 9.175 19 10V20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5V19H11V19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5ZM11 18H13Q13 17.425 13.387 16.863Q13.775 16.3 14.25 15.688Q14.725 15.075 15.113 14.412Q15.5 13.75 15.5 13Q15.5 11.55 14.475 10.525Q13.45 9.5 12 9.5Q10.55 9.5 9.525 10.525Q8.5 11.55 8.5 13Q8.5 13.75 8.887 14.412Q9.275 15.075 9.75 15.688Q10.225 16.3 10.613 16.863Q11 17.425 11 18ZM6 6.5Q6 5.875 6.438 5.438Q6.875 5 7.5 5H16.5Q17.125 5 17.562 5.438Q18 5.875 18 6.5ZM7 3.5Q7 2.875 7.438 2.438Q7.875 2 8.5 2H15.5Q16.125 2 16.562 2.438Q17 2.875 17 3.5Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionRoundedFilled.displayName = 'AmauiIconMaterialBatchPredictionRoundedFilled';

export default IconMaterialBatchPredictionRoundedFilled;
