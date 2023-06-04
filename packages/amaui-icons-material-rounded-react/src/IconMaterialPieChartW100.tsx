import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPieChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartW100'

      short_name='PieChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 11.65H20q-.15-3.125-2.337-5.325Q15.475 4.125 12.35 4Zm-.7 8.35V4q-3.2.125-5.425 2.438Q4 8.75 4 12q0 3.25 2.225 5.562Q8.45 19.875 11.65 20Zm.7 0q3.125-.125 5.313-2.325 2.187-2.2 2.337-5.325h-7.65ZM12 12Zm0 8.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPieChartW100.displayName = 'AmauiIconMaterialPieChartW100';

export default IconMaterialPieChartW100;
