import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebar'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM17.5 8.675H20V6h-2.5v2.675Zm0 4.65H20v-2.65h-2.5v2.65ZM4 18h11.5V6H4v12Zm13.5 0H20v-2.675h-2.5V18Z"/>
    </Icon>
  );
});

IconMaterialViewSidebar.displayName = 'AmauiIconMaterialViewSidebar';

export default IconMaterialViewSidebar;
