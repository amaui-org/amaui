import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChartOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartOffW100Filled'

      short_name='BarChartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-212q-12.75 0-21.37-8.63Q212-229.25 212-242v-285.52q0-13.48 8.63-21.98 8.62-8.5 21.37-8.5h48q12.75 0 21.38 8.62Q320-540.75 320-528v285.52q0 13.48-8.62 21.98-8.63 8.5-21.38 8.5h-48Zm214 0q-12.75 0-21.37-8.63Q426-229.25 426-242v-292l108 108v184q0 12.75-8.62 21.37Q516.75-212 504-212h-48Zm78-326L426-646v-72q0-12.75 8.63-21.38Q443.25-748 456-748h48q12.75 0 21.38 8.62Q534-730.75 534-718v180Zm214 214-54-54h24q12.75 0 21.38 8.62Q748-360.75 748-348v24Zm36 188L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialBarChartOffW100Filled.displayName = 'AmauiIconMaterialBarChartOffW100Filled';

export default IconMaterialBarChartOffW100Filled;
