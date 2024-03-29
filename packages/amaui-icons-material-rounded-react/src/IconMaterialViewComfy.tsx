import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfy'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H4q-.825 0-1.412-.587Q2 18.825 2 18Zm18-7V6H4v5h16Zm-10 7h10v-5H10v5Zm-6 0h4v-5H4v5Z"/>
    </Icon>
  );
});

IconMaterialViewComfy.displayName = 'AmauiIconMaterialViewComfy';

export default IconMaterialViewComfy;
