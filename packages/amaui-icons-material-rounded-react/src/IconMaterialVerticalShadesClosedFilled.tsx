import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosedFilled'

      short_name='VerticalShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21Zm3-2h1.5V5H6Zm3.5 0H11V5H9.5Zm3.5 0h1.5V5H13Zm3.5 0H18V5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosedFilled.displayName = 'AmauiIconMaterialVerticalShadesClosedFilled';

export default IconMaterialVerticalShadesClosedFilled;
