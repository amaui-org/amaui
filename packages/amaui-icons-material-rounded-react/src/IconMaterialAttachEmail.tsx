import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachEmail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmail'

      short_name='AttachEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v5h-2V6l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L3 6v10h10v2Zm8-9 8-5H3Zm8 13q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V17q0 .425-.288.712Q19.425 18 19 18t-.712-.288Q18 17.425 18 17v-3.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-3q0-.425.288-.713Q21.575 14 22 14t.712.287Q23 14.575 23 15v3q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 6v.25V4.8q0-.275 0 0V4v.8-.025V6.25 6v10-6Z"/>
    </Icon>
  );
});

IconMaterialAttachEmail.displayName = 'AmauiIconMaterialAttachEmail';

export default IconMaterialAttachEmail;
