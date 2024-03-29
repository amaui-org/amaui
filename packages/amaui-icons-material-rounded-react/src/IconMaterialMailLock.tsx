import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLock'

      short_name='MailLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4h-2V8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h12v2Zm8-9 8-5H4Zm-8 7V8v.25-1.475.025V6v.8-.013V8.25 8v10Zm15 2q-.425 0-.712-.288Q18 19.425 18 19v-3q0-.425.288-.713Q18.575 15 19 15v-1q0-.825.587-1.413Q20.175 12 21 12q.825 0 1.413.587Q23 13.175 23 14v1q.425 0 .712.287.288.288.288.713v3q0 .425-.288.712Q23.425 20 23 20Zm1-5h2v-1q0-.425-.288-.713Q21.425 13 21 13t-.712.287Q20 13.575 20 14Z"/>
    </Icon>
  );
});

IconMaterialMailLock.displayName = 'AmauiIconMaterialMailLock';

export default IconMaterialMailLock;
