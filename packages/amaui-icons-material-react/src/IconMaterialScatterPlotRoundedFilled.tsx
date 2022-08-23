import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScatterPlotRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlotRoundedFilled'
      short_name='ScatterPlot'

      {...props}
    >
      <path d="M7 18Q5.35 18 4.175 16.825Q3 15.65 3 14Q3 12.35 4.175 11.175Q5.35 10 7 10Q8.65 10 9.825 11.175Q11 12.35 11 14Q11 15.65 9.825 16.825Q8.65 18 7 18ZM11 10Q9.35 10 8.175 8.825Q7 7.65 7 6Q7 4.35 8.175 3.175Q9.35 2 11 2Q12.65 2 13.825 3.175Q15 4.35 15 6Q15 7.65 13.825 8.825Q12.65 10 11 10ZM17 21Q15.35 21 14.175 19.825Q13 18.65 13 17Q13 15.35 14.175 14.175Q15.35 13 17 13Q18.65 13 19.825 14.175Q21 15.35 21 17Q21 18.65 19.825 19.825Q18.65 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialScatterPlotRoundedFilled.displayName = 'AmauiIconMaterialScatterPlotRoundedFilled';

export default IconMaterialScatterPlotRoundedFilled;
