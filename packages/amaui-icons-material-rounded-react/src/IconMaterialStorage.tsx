import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storage'

      short_name='Storage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18q0-.825.588-1.413Q3.175 16 4 16h16q.825 0 1.413.587Q22 17.175 22 18q0 .825-.587 1.413Q20.825 20 20 20Zm1-1h2v-2H5ZM4 8q-.825 0-1.412-.588Q2 6.825 2 6t.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6t-.587 1.412Q20.825 8 20 8Zm1-1h2V5H5Zm-1 7q-.825 0-1.412-.588Q2 12.825 2 12t.588-1.413Q3.175 10 4 10h16q.825 0 1.413.587Q22 11.175 22 12q0 .825-.587 1.412Q20.825 14 20 14Zm1-1h2v-2H5Z"/>
    </Icon>
  );
});

IconMaterialStorage.displayName = 'AmauiIconMaterialStorage';

export default IconMaterialStorage;
