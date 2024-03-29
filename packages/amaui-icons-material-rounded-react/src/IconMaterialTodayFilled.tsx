import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTodayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayFilled'

      short_name='Today'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.5q-1.05 0-1.775-.725Q6.5 15.05 6.5 14q0-1.05.725-1.775Q7.95 11.5 9 11.5q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q10.05 16.5 9 16.5ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>
    </Icon>
  );
});

IconMaterialTodayFilled.displayName = 'AmauiIconMaterialTodayFilled';

export default IconMaterialTodayFilled;
