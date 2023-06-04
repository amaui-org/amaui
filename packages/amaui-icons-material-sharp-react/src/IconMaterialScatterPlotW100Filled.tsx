import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScatterPlotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlotW100Filled'

      short_name='ScatterPlot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 16.4q-1.125 0-1.912-.788Q4.6 14.825 4.6 13.7t.788-1.913Q6.175 11 7.3 11t1.913.787Q10 12.575 10 13.7t-.787 1.912q-.788.788-1.913.788ZM11 9.2q-1.125 0-1.912-.788Q8.3 7.625 8.3 6.5t.788-1.913Q9.875 3.8 11 3.8t1.913.787q.787.788.787 1.913t-.787 1.912Q12.125 9.2 11 9.2Zm5.7 10.2q-1.125 0-1.912-.788Q14 17.825 14 16.7t.788-1.913Q15.575 14 16.7 14t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Z"/>
    </Icon>
  );
});

IconMaterialScatterPlotW100Filled.displayName = 'AmauiIconMaterialScatterPlotW100Filled';

export default IconMaterialScatterPlotW100Filled;
