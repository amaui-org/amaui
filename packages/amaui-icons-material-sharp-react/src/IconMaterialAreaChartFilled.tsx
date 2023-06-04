import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartFilled'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 16-9.4-7.35-3.975 5.475L3 10.5V7l4 3 5-7 5 4h4ZM3 20v-7l5 4 4-5.5 9 7.025V20Z"/>
    </Icon>
  );
});

IconMaterialAreaChartFilled.displayName = 'AmauiIconMaterialAreaChartFilled';

export default IconMaterialAreaChartFilled;
