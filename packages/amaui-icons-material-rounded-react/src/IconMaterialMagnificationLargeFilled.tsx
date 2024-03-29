import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeFilled'

      short_name='MagnificationLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h10q.425 0 .712-.288Q17 14.425 17 14V8q0-.425-.288-.713Q16.425 7 16 7H6q-.425 0-.713.287Q5 7.575 5 8v6q0 .425.287.712Q5.575 15 6 15Zm-2 5q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeFilled.displayName = 'AmauiIconMaterialMagnificationLargeFilled';

export default IconMaterialMagnificationLargeFilled;
