import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPivotTableChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartRoundedFilled'
      short_name='PivotTableChart'

      {...props}
    >
      <path d="M10 8V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V10H8V21ZM3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8V8ZM12.3 21.3 9.7 18.7Q9.55 18.55 9.488 18.375Q9.425 18.2 9.425 18Q9.425 17.8 9.488 17.625Q9.55 17.45 9.7 17.3L12.325 14.675Q12.6 14.4 13 14.4Q13.4 14.4 13.7 14.7Q13.975 14.975 13.975 15.387Q13.975 15.8 13.7 16.1L12.85 17H15Q15.825 17 16.413 16.413Q17 15.825 17 15V12.8L16.075 13.725Q15.8 14 15.4 14Q15 14 14.7 13.7Q14.425 13.425 14.425 13Q14.425 12.575 14.7 12.3L17.3 9.7Q17.45 9.55 17.625 9.487Q17.8 9.425 18 9.425Q18.2 9.425 18.375 9.487Q18.55 9.55 18.7 9.7L21.325 12.325Q21.6 12.6 21.6 13Q21.6 13.4 21.3 13.7Q21.025 13.975 20.6 13.975Q20.175 13.975 19.9 13.7L19 12.8V15Q19 16.65 17.825 17.825Q16.65 19 15 19H12.85L13.725 19.9Q14 20.2 14 20.6Q14 21 13.7 21.3Q13.425 21.575 13 21.575Q12.575 21.575 12.3 21.3Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartRoundedFilled.displayName = 'AmauiIconMaterialPivotTableChartRoundedFilled';

export default IconMaterialPivotTableChartRoundedFilled;
