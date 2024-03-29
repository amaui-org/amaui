import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuilt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuilt'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7q0-.825.587-1.412Q4.175 5 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19H5q-.825 0-1.413-.587Q3 17.825 3 17Zm7.325-10v4H19V7h-8.675ZM19 13h-3.325v4H19v-4Zm-8.675 0v4h3.35v-4h-3.35ZM5 17h3.325V7H5v10Z"/>
    </Icon>
  );
});

IconMaterialViewQuilt.displayName = 'AmauiIconMaterialViewQuilt';

export default IconMaterialViewQuilt;
