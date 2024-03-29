import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnalyticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsFilled'

      short_name='Analytics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm3-4q.425 0 .713-.288Q9 16.425 9 16v-3q0-.425-.287-.713Q8.425 12 8 12t-.713.287Q7 12.575 7 13v3q0 .425.287.712Q7.575 17 8 17Zm8 0q.425 0 .712-.288Q17 16.425 17 16V8q0-.425-.288-.713Q16.425 7 16 7t-.712.287Q15 7.575 15 8v8q0 .425.288.712.287.288.712.288Zm-4 0q.425 0 .713-.288Q13 16.425 13 16v-1q0-.425-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15v1q0 .425.288.712.287.288.712.288Zm0-5q.425 0 .713-.288Q13 11.425 13 11v-.025q0-.425-.287-.7Q12.425 10 12 10t-.712.287Q11 10.575 11 11v.025q0 .425.288.7.287.275.712.275Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsFilled.displayName = 'AmauiIconMaterialAnalyticsFilled';

export default IconMaterialAnalyticsFilled;
