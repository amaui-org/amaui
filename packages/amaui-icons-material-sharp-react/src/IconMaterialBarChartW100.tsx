import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartW100'

      short_name='BarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.35v-9.7h2.7v9.7Zm6 0V4.65h2.7v14.7Zm6 0v-5.7h2.7v5.7Z"/>
    </Icon>
  );
});

IconMaterialBarChartW100.displayName = 'AmauiIconMaterialBarChartW100';

export default IconMaterialBarChartW100;
