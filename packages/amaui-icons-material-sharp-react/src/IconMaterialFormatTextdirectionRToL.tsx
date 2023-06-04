import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionRToL = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionRToL'

      short_name='FormatTextdirectionRToL'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 22-4-4 4-4 1.4 1.4L6.8 17H21v2H6.8l1.6 1.6Zm2-7v-5q-1.65 0-2.825-1.175Q5 7.65 5 6q0-1.65 1.175-2.825Q7.35 2 9 2h8v2h-2v11h-2V4h-2v11Zm0-7V4q-.825 0-1.412.588Q7 5.175 7 6t.588 1.412Q8.175 8 9 8Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionRToL.displayName = 'AmauiIconMaterialFormatTextdirectionRToL';

export default IconMaterialFormatTextdirectionRToL;
