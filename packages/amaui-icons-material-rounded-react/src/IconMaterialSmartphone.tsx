import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Smartphone'

      short_name='Smartphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSmartphone.displayName = 'AmauiIconMaterialSmartphone';

export default IconMaterialSmartphone;
