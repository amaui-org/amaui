import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenFilled'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9V6h-3V4h3q.825 0 1.413.588Q22 5.175 22 6v3ZM2 9V6q0-.825.588-1.412Q3.175 4 4 4h3v2H4v3Zm15 11v-2h3v-3h2v3q0 .825-.587 1.413Q20.825 20 20 20ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3h2v3h3v2Zm12-4H8q-.825 0-1.412-.588Q6 14.825 6 14v-4q0-.825.588-1.413Q7.175 8 8 8h8q.825 0 1.413.587Q18 9.175 18 10v4q0 .825-.587 1.412Q16.825 16 16 16Z"/>
    </Icon>
  );
});

IconMaterialFitScreenFilled.displayName = 'AmauiIconMaterialFitScreenFilled';

export default IconMaterialFitScreenFilled;
