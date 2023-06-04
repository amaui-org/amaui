import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScatterPlotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlotFilled'

      short_name='ScatterPlot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-1.65 0-2.825-1.175Q3 15.65 3 14q0-1.65 1.175-2.825Q5.35 10 7 10q1.65 0 2.825 1.175Q11 12.35 11 14q0 1.65-1.175 2.825Q8.65 18 7 18Zm4-8q-1.65 0-2.825-1.175Q7 7.65 7 6q0-1.65 1.175-2.825Q9.35 2 11 2q1.65 0 2.825 1.175Q15 4.35 15 6q0 1.65-1.175 2.825Q12.65 10 11 10Zm6 11q-1.65 0-2.825-1.175Q13 18.65 13 17q0-1.65 1.175-2.825Q15.35 13 17 13q1.65 0 2.825 1.175Q21 15.35 21 17q0 1.65-1.175 2.825Q18.65 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialScatterPlotFilled.displayName = 'AmauiIconMaterialScatterPlotFilled';

export default IconMaterialScatterPlotFilled;
