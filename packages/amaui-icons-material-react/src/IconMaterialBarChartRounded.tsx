import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartRounded'
      short_name='BarChart'

      {...props}
    >
      <path d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5V10.5Q5 9.875 5.438 9.438Q5.875 9 6.5 9Q7.125 9 7.562 9.438Q8 9.875 8 10.5V18.5Q8 19.125 7.562 19.562Q7.125 20 6.5 20ZM12 20Q11.375 20 10.938 19.562Q10.5 19.125 10.5 18.5V6.5Q10.5 5.875 10.938 5.438Q11.375 5 12 5Q12.625 5 13.062 5.438Q13.5 5.875 13.5 6.5V18.5Q13.5 19.125 13.062 19.562Q12.625 20 12 20ZM17.5 20Q16.875 20 16.438 19.562Q16 19.125 16 18.5V14.5Q16 13.875 16.438 13.438Q16.875 13 17.5 13Q18.125 13 18.562 13.438Q19 13.875 19 14.5V18.5Q19 19.125 18.562 19.562Q18.125 20 17.5 20Z"/>
    </Icon>
  );
});

IconMaterialBarChartRounded.displayName = 'AmauiIconMaterialBarChartRounded';

export default IconMaterialBarChartRounded;
