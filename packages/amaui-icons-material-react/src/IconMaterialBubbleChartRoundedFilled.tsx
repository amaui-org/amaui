import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBubbleChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartRoundedFilled'
      short_name='BubbleChart'

      {...props}
    >
      <path d="M7 18Q5.35 18 4.175 16.825Q3 15.65 3 14Q3 12.35 4.175 11.175Q5.35 10 7 10Q8.65 10 9.825 11.175Q11 12.35 11 14Q11 15.65 9.825 16.825Q8.65 18 7 18ZM16.5 14Q14.2 14 12.6 12.4Q11 10.8 11 8.5Q11 6.2 12.6 4.6Q14.2 3 16.5 3Q18.8 3 20.4 4.6Q22 6.2 22 8.5Q22 10.8 20.4 12.4Q18.8 14 16.5 14ZM14.5 21Q13.25 21 12.375 20.125Q11.5 19.25 11.5 18Q11.5 16.75 12.375 15.875Q13.25 15 14.5 15Q15.75 15 16.625 15.875Q17.5 16.75 17.5 18Q17.5 19.25 16.625 20.125Q15.75 21 14.5 21Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartRoundedFilled.displayName = 'AmauiIconMaterialBubbleChartRoundedFilled';

export default IconMaterialBubbleChartRoundedFilled;
