import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mail'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM20 8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h16Zm-8 3 8-5H4ZM4 8v.25-1.475.025V6v.8-.013V8.25 8v10Z"/>
    </Icon>
  );
});

IconMaterialMail.displayName = 'AmauiIconMaterialMail';

export default IconMaterialMail;
