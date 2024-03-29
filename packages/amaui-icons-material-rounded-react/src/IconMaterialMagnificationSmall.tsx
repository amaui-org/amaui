import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmall'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11h2q.425 0 .713-.288Q9 10.425 9 10V8q0-.425-.287-.713Q8.425 7 8 7H6q-.425 0-.713.287Q5 7.575 5 8v2q0 .425.287.712Q5.575 11 6 11Zm-2 9q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmall.displayName = 'AmauiIconMaterialMagnificationSmall';

export default IconMaterialMagnificationSmall;
