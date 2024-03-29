import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Work'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21Zm6-15h4V4h-4ZM4 19h16V8H4v11Zm0 0V8v11Z"/>
    </Icon>
  );
});

IconMaterialWork.displayName = 'AmauiIconMaterialWork';

export default IconMaterialWork;
