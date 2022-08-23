import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatchPredictionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionSharp'
      short_name='BatchPrediction'

      {...props}
    >
      <path d="M5 22V8H19V22ZM11 20.5H13V19H11ZM11 18H13Q13 17.425 13.387 16.863Q13.775 16.3 14.25 15.688Q14.725 15.075 15.113 14.412Q15.5 13.75 15.5 13Q15.5 11.55 14.475 10.525Q13.45 9.5 12 9.5Q10.55 9.5 9.525 10.525Q8.5 11.55 8.5 13Q8.5 13.75 8.887 14.412Q9.275 15.075 9.75 15.688Q10.225 16.3 10.613 16.863Q11 17.425 11 18ZM6 6.5V5H18V6.5ZM7 3.5V2H17V3.5Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionSharp.displayName = 'AmauiIconMaterialBatchPredictionSharp';

export default IconMaterialBatchPredictionSharp;
