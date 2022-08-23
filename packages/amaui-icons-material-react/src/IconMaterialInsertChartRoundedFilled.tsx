import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInsertChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertChartRoundedFilled'
      short_name='InsertChart'

      {...props}
    >
      <path d="M8 17Q8.425 17 8.713 16.712Q9 16.425 9 16V11Q9 10.575 8.713 10.287Q8.425 10 8 10Q7.575 10 7.287 10.287Q7 10.575 7 11V16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM16 17Q16.425 17 16.712 16.712Q17 16.425 17 16V14Q17 13.575 16.712 13.287Q16.425 13 16 13Q15.575 13 15.288 13.287Q15 13.575 15 14V16Q15 16.425 15.288 16.712Q15.575 17 16 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialInsertChartRoundedFilled.displayName = 'AmauiIconMaterialInsertChartRoundedFilled';

export default IconMaterialInsertChartRoundedFilled;
