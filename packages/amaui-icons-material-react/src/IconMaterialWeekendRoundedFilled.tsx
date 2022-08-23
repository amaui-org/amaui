import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendRoundedFilled'
      short_name='Weekend'

      {...props}
    >
      <path d="M4 20Q2.75 20 1.875 19.125Q1 18.25 1 17V12Q1 11.175 1.588 10.587Q2.175 10 3 10Q3.825 10 4.412 10.587Q5 11.175 5 12V16H19V12Q19 11.175 19.587 10.587Q20.175 10 21 10Q21.825 10 22.413 10.587Q23 11.175 23 12V17Q23 18.25 22.125 19.125Q21.25 20 20 20ZM7 14V12Q7 10.675 6.138 9.675Q5.275 8.675 4 8.3V7Q4 5.75 4.875 4.875Q5.75 4 7 4H17Q18.25 4 19.125 4.875Q20 5.75 20 7V8.3Q18.675 8.575 17.837 9.612Q17 10.65 17 12V14Z"/>
    </Icon>
  );
});

IconMaterialWeekendRoundedFilled.displayName = 'AmauiIconMaterialWeekendRoundedFilled';

export default IconMaterialWeekendRoundedFilled;
