import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedLineChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartW100'

      short_name='StackedLineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 14.4-5.85 5.85q-.1.1-.237.113-.138.012-.263-.113T3.125 20q0-.125.125-.25l5.825-5.825Q9.3 13.7 9.6 13.7q.3 0 .525.225L13.6 17.4l6.725-7.75q.1-.125.225-.125t.25.1q.1.1.113.225.012.125-.088.25l-6.65 7.725q-.2.25-.537.262-.338.013-.563-.212Zm0-6-5.85 5.85q-.1.1-.237.113-.138.012-.263-.113T3.125 14q0-.125.125-.25l5.825-5.825Q9.3 7.7 9.6 7.7q.3 0 .525.225L13.6 11.4l6.725-7.75q.1-.125.225-.125t.25.1q.1.1.113.225.012.125-.088.25l-6.65 7.725q-.2.25-.537.262-.338.013-.563-.212Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartW100.displayName = 'AmauiIconMaterialStackedLineChartW100';

export default IconMaterialStackedLineChartW100;
