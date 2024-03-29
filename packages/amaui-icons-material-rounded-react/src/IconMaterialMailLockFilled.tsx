import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockFilled'

      short_name='MailLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20q-.425 0-.712-.288Q18 19.425 18 19v-3q0-.425.288-.713Q18.575 15 19 15v-1q0-.825.587-1.413Q20.175 12 21 12q.825 0 1.413.587Q23 13.175 23 14v1q.425 0 .712.287.288.288.288.713v3q0 .425-.288.712Q23.425 20 23 20Zm1-5h2v-1q0-.425-.288-.713Q21.425 13 21 13t-.712.287Q20 13.575 20 14ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4h-1q-2.075 0-3.538 1.462Q16 12.925 16 15v5Zm8-7.175q.125 0 .262-.038.138-.037.263-.112L19.6 8.25q.2-.125.3-.312.1-.188.1-.413 0-.5-.425-.75T18.7 6.8L12 11 5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437.1.188.3.288l7.075 4.425q.125.075.263.112.137.038.262.038Z"/>
    </Icon>
  );
});

IconMaterialMailLockFilled.displayName = 'AmauiIconMaterialMailLockFilled';

export default IconMaterialMailLockFilled;
