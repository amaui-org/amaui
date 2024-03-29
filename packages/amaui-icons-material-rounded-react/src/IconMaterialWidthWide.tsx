import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWide'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h2V6H4v12Zm4 0h8V6H8Zm10 0h2V6h-2ZM8 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthWide.displayName = 'AmauiIconMaterialWidthWide';

export default IconMaterialWidthWide;
