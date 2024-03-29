import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMmaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaFilled'

      short_name='SportsMma'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.425 0-.713-.288Q7 20.425 7 20v-3h10v3q0 .425-.288.712Q16.425 21 16 21Zm-1.175-5q-.35 0-.625-.225t-.35-.575l-.8-4Q5 11.075 5 11V5q0-.825.588-1.413Q6.175 3 7 3h8q.825 0 1.413.587Q17 4.175 17 5v3q0-.425.288-.713Q17.575 7 18 7t.712.287Q19 7.575 19 8v3q0 .075-.05.2l-.8 4q-.075.35-.35.575-.275.225-.625.225ZM9 10h4q.425 0 .713-.288Q14 9.425 14 9V8q0-.425-.287-.713Q13.425 7 13 7H9q-.425 0-.712.287Q8 7.575 8 8v1q0 .425.288.712Q8.575 10 9 10Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaFilled.displayName = 'AmauiIconMaterialSportsMmaFilled';

export default IconMaterialSportsMmaFilled;
