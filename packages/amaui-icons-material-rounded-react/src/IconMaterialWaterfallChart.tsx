import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterfallChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChart'

      short_name='WaterfallChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 20q-.625 0-1.062-.438Q18 19.125 18 18.5v-13q0-.625.438-1.062Q18.875 4 19.5 4t1.062.438Q21 4.875 21 5.5v13q0 .625-.438 1.062Q20.125 20 19.5 20Zm-15 0q-.625 0-1.062-.438Q3 19.125 3 18.5v-4q0-.625.438-1.062Q3.875 13 4.5 13t1.062.438Q6 13.875 6 14.5v4q0 .625-.438 1.062Q5.125 20 4.5 20Zm11-13q-.625 0-1.062-.438Q14 6.125 14 5.5t.438-1.062Q14.875 4 15.5 4t1.062.438Q17 4.875 17 5.5t-.438 1.062Q16.125 7 15.5 7Zm-4 2q-.625 0-1.062-.438Q10 8.125 10 7.5v-1q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v1q0 .625-.438 1.062Q12.125 9 11.5 9Zm-3 5q-.625 0-1.062-.438Q7 13.125 7 12.5v-1q0-.625.438-1.062Q7.875 10 8.5 10t1.062.438Q10 10.875 10 11.5v1q0 .625-.438 1.062Q9.125 14 8.5 14Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChart.displayName = 'AmauiIconMaterialWaterfallChart';

export default IconMaterialWaterfallChart;
