import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachEmailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailFilled'

      short_name='AttachEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V17q0 .425-.288.712Q19.425 18 19 18t-.712-.288Q18 17.425 18 17v-3.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-3q0-.425.288-.713Q21.575 14 22 14t.712.287Q23 14.575 23 15v3q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v6h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Zm8-7.175q.125 0 .262-.038.138-.037.263-.112L18.6 6.25q.175-.1.288-.288.112-.187.112-.437 0-.45-.4-.725-.4-.275-.9 0L11 9 4.3 4.8q-.475-.3-.887-.025Q3 5.05 3 5.525q0 .25.112.437.113.188.288.288l7.075 4.425q.125.075.263.112.137.038.262.038Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailFilled.displayName = 'AmauiIconMaterialAttachEmailFilled';

export default IconMaterialAttachEmailFilled;
