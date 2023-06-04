import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartW100'

      short_name='ShowChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.25 17.35q-.125-.125-.125-.25t.125-.25l5.825-5.825Q9.3 10.8 9.6 10.8q.3 0 .525.225L13.6 14.5l6.725-7.75q.1-.125.225-.125t.25.1q.1.1.113.225.012.125-.088.25l-6.65 7.725q-.2.25-.537.263-.338.012-.563-.213L9.6 11.5l-5.85 5.85q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterialShowChartW100.displayName = 'AmauiIconMaterialShowChartW100';

export default IconMaterialShowChartW100;
