import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterfallChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartRoundedFilled'
      short_name='WaterfallChart'

      {...props}
    >
      <path d="M19.5 20Q18.875 20 18.438 19.562Q18 19.125 18 18.5V5.5Q18 4.875 18.438 4.438Q18.875 4 19.5 4Q20.125 4 20.562 4.438Q21 4.875 21 5.5V18.5Q21 19.125 20.562 19.562Q20.125 20 19.5 20ZM4.5 20Q3.875 20 3.438 19.562Q3 19.125 3 18.5V14.5Q3 13.875 3.438 13.438Q3.875 13 4.5 13Q5.125 13 5.562 13.438Q6 13.875 6 14.5V18.5Q6 19.125 5.562 19.562Q5.125 20 4.5 20ZM15.5 7Q14.875 7 14.438 6.562Q14 6.125 14 5.5Q14 4.875 14.438 4.438Q14.875 4 15.5 4Q16.125 4 16.562 4.438Q17 4.875 17 5.5Q17 6.125 16.562 6.562Q16.125 7 15.5 7ZM11.5 9Q10.875 9 10.438 8.562Q10 8.125 10 7.5V6.5Q10 5.875 10.438 5.438Q10.875 5 11.5 5Q12.125 5 12.562 5.438Q13 5.875 13 6.5V7.5Q13 8.125 12.562 8.562Q12.125 9 11.5 9ZM8.5 14Q7.875 14 7.438 13.562Q7 13.125 7 12.5V11.5Q7 10.875 7.438 10.438Q7.875 10 8.5 10Q9.125 10 9.562 10.438Q10 10.875 10 11.5V12.5Q10 13.125 9.562 13.562Q9.125 14 8.5 14Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartRoundedFilled.displayName = 'AmauiIconMaterialWaterfallChartRoundedFilled';

export default IconMaterialWaterfallChartRoundedFilled;
