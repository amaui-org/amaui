import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenFilled'

      short_name='TvGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2q-.825 0-1.412-.587Q2 17.825 2 17V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v11q0 .825-.587 1.413Q20.825 19 20 19v2h-1l-.65-2H5.675L5 21Z"/>
    </Icon>
  );
});

IconMaterialTvGenFilled.displayName = 'AmauiIconMaterialTvGenFilled';

export default IconMaterialTvGenFilled;
