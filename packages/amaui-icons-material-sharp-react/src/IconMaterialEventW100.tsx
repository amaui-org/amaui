import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventW100'

      short_name='Event'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18q-.825 0-1.412-.587Q13 16.825 13 16q0-.825.588-1.413Q14.175 14 15 14t1.413.587Q17 15.175 17 16q0 .825-.587 1.413Q15.825 18 15 18ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm0-9.9h14V6H5Zm0 0V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEventW100.displayName = 'AmauiIconMaterialEventW100';

export default IconMaterialEventW100;
