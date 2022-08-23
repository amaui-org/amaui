import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStackedBarChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartRoundedFilled'
      short_name='StackedBarChart'

      {...props}
    >
      <path d="M7 20Q6.375 20 5.938 19.562Q5.5 19.125 5.5 18.5V10H8.5V18.5Q8.5 19.125 8.062 19.562Q7.625 20 7 20ZM5.5 9V6.5Q5.5 5.875 5.938 5.438Q6.375 5 7 5Q7.625 5 8.062 5.438Q8.5 5.875 8.5 6.5V9ZM17 20Q16.375 20 15.938 19.562Q15.5 19.125 15.5 18.5V16H18.5V18.5Q18.5 19.125 18.062 19.562Q17.625 20 17 20ZM15.5 15V14.5Q15.5 13.875 15.938 13.438Q16.375 13 17 13Q17.625 13 18.062 13.438Q18.5 13.875 18.5 14.5V15ZM12 20Q11.375 20 10.938 19.562Q10.5 19.125 10.5 18.5V13H13.5V18.5Q13.5 19.125 13.062 19.562Q12.625 20 12 20ZM10.5 12V10.5Q10.5 9.875 10.938 9.438Q11.375 9 12 9Q12.625 9 13.062 9.438Q13.5 9.875 13.5 10.5V12Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChartRoundedFilled.displayName = 'AmauiIconMaterialStackedBarChartRoundedFilled';

export default IconMaterialStackedBarChartRoundedFilled;
