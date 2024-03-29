import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvFilled'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v5h-9.2l1.15-1.15q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L9.7 10.3q-.15.15-.212.325-.063.175-.063.375t.063.375q.062.175.212.325l2.85 2.85q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L12.8 12H22v5q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialResetTvFilled.displayName = 'AmauiIconMaterialResetTvFilled';

export default IconMaterialResetTvFilled;
