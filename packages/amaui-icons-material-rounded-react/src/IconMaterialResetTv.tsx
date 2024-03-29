import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTv'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v2q0 .425-.288.713Q21.425 8 21 8t-.712-.287Q20 7.425 20 7V5H4v12h16v-5h-7.2l1.15 1.15q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L9.7 11.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l2.85-2.85q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L12.8 10H20q.825 0 1.413.587Q22 11.175 22 12v5q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm4-10Z"/>
    </Icon>
  );
});

IconMaterialResetTv.displayName = 'AmauiIconMaterialResetTv';

export default IconMaterialResetTv;
