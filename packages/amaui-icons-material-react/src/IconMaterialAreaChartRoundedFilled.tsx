import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartRoundedFilled'
      short_name='AreaChart'

      {...props}
    >
      <path d="M21 16 13.225 9.925Q12.55 9.4 11.713 9.512Q10.875 9.625 10.375 10.325L7.625 14.125L4.25 11.45Q3.95 11.2 3.625 11.1Q3.3 11 3 11V7.25Q3.125 7.25 3.288 7.287Q3.45 7.325 3.6 7.45L7 10L11.375 3.85Q11.625 3.5 12.05 3.438Q12.475 3.375 12.825 3.65L17 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8ZM4 20Q3.575 20 3.288 19.712Q3 19.425 3 19V13.275Q3.175 13.275 3.325 13.325Q3.475 13.375 3.625 13.5L8 17L11.4 12.325Q11.65 11.975 12.062 11.912Q12.475 11.85 12.825 12.125L21 18.525V19Q21 19.425 20.712 19.712Q20.425 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAreaChartRoundedFilled.displayName = 'AmauiIconMaterialAreaChartRoundedFilled';

export default IconMaterialAreaChartRoundedFilled;
