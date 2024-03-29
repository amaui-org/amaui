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
      <path d="M1 18V2h20v7h-2V6l-8 5-8-5v10h10v2Zm10-9 8-5H3Zm8 13q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 4v12-6Z"/>
    </Icon>
  );
});

IconMaterialAttachEmail.displayName = 'AmauiIconMaterialAttachEmail';

export default IconMaterialAttachEmail;
