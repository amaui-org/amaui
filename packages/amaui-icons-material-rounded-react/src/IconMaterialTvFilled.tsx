import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvFilled'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialTvFilled.displayName = 'AmauiIconMaterialTvFilled';

export default IconMaterialTvFilled;
