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
      <path d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22Zm-8-11 8-5V4l-8 5-8-5v2ZM1 18V2h20v8h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailFilled.displayName = 'AmauiIconMaterialAttachEmailFilled';

export default IconMaterialAttachEmailFilled;
