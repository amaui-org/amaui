import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocam = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Videocam'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Zm0-2h12V6H4v12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideocam.displayName = 'AmauiIconMaterialVideocam';

export default IconMaterialVideocam;
