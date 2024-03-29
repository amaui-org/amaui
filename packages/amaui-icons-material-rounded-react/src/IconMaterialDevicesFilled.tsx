import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFilled'

      short_name='Devices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17V6q0-.825.588-1.412Q5.175 4 6 4h14q.425 0 .712.287Q21 4.575 21 5t-.288.713Q20.425 6 20 6H6v11h4.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q11.125 20 10.5 20h-7q-.625 0-1.062-.438Q2 19.125 2 18.5t.438-1.062Q2.875 17 3.5 17Zm11 3q-.425 0-.712-.288Q14 19.425 14 19V9q0-.425.288-.713Q14.575 8 15 8h6q.425 0 .712.287Q22 8.575 22 9v10q0 .425-.288.712Q21.425 20 21 20Zm1-3h4v-7h-4Z"/>
    </Icon>
  );
});

IconMaterialDevicesFilled.displayName = 'AmauiIconMaterialDevicesFilled';

export default IconMaterialDevicesFilled;
