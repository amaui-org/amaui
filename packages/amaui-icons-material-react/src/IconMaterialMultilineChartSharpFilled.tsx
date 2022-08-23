import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMultilineChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartSharpFilled'
      short_name='MultilineChart'

      {...props}
    >
      <path d="M3.4 18.5 2 17.05 9.5 9.55 13.5 13.55 16.4 10.3Q15.125 8.8 13.4 7.925Q11.675 7.05 9.6 7.05Q7.825 7.05 6.25 7.713Q4.675 8.375 3.4 9.5L2 8.05Q3.55 6.65 5.475 5.85Q7.4 5.05 9.6 5.05Q12.05 5.05 14.125 6.037Q16.2 7.025 17.75 8.8L20.6 5.55L22 7L19 10.4Q19.825 11.725 20.338 13.275Q20.85 14.825 21 16.55H19Q18.85 15.3 18.488 14.162Q18.125 13.025 17.55 12L13.6 16.45L9.5 12.4Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartSharpFilled.displayName = 'AmauiIconMaterialMultilineChartSharpFilled';

export default IconMaterialMultilineChartSharpFilled;
