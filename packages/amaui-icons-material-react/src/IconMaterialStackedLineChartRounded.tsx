import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStackedLineChartRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedLineChartRounded'
      short_name='StackedLineChart'

      {...props}
    >
      <path d="M9.5 15.5 4.25 20.75Q3.925 21.075 3.5 21.075Q3.075 21.075 2.75 20.75Q2.425 20.425 2.425 20Q2.425 19.575 2.75 19.25L8.8 13.2Q9.1 12.9 9.5 12.9Q9.9 12.9 10.2 13.2L13.5 16.5L19.9 9.275Q20.175 8.95 20.613 8.95Q21.05 8.95 21.35 9.25Q21.625 9.525 21.638 9.912Q21.65 10.3 21.375 10.6L14.2 18.7Q13.925 19.025 13.488 19.038Q13.05 19.05 12.75 18.75ZM9.5 9.5 4.25 14.75Q3.925 15.075 3.5 15.075Q3.075 15.075 2.75 14.75Q2.425 14.425 2.425 14Q2.425 13.575 2.75 13.25L8.8 7.2Q9.1 6.9 9.5 6.9Q9.9 6.9 10.2 7.2L13.5 10.5L19.9 3.275Q20.175 2.95 20.613 2.95Q21.05 2.95 21.35 3.25Q21.625 3.525 21.638 3.912Q21.65 4.3 21.375 4.6L14.2 12.7Q13.925 13.025 13.488 13.037Q13.05 13.05 12.75 12.75Z"/>
    </Icon>
  );
});

IconMaterialStackedLineChartRounded.displayName = 'AmauiIconMaterialStackedLineChartRounded';

export default IconMaterialStackedLineChartRounded;
