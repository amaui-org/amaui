import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibrary'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.05 13.5 4.15-2.65q.475-.275.475-.85t-.475-.85L13.05 6.5q-.5-.325-1.025-.05-.525.275-.525.875v5.35q0 .6.525.875t1.025-.05ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialVideoLibrary.displayName = 'AmauiIconMaterialVideoLibrary';

export default IconMaterialVideoLibrary;
