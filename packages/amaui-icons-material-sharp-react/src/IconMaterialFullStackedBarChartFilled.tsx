import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullStackedBarChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullStackedBarChartFilled'

      short_name='FullStackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-3h4v3Zm0-4v-4h4v4Zm0-5V4h4v7Zm6 9v-7h4v7Zm0-8V8h4v4Zm0-5V4h4v3Zm6 13v-2h4v2Zm0-3v-4h4v4Zm0-5V4h4v8Z"/>
    </Icon>
  );
});

IconMaterialFullStackedBarChartFilled.displayName = 'AmauiIconMaterialFullStackedBarChartFilled';

export default IconMaterialFullStackedBarChartFilled;
