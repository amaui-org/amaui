import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCode2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2W100'

      short_name='QrCode2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19.75V18h1.75v1.75ZM11.25 18v-4.25H13V18ZM18 14.5V12h1.75v2.5ZM16.25 12v-1.75H18V12ZM6 13.75V12h1.75v1.75ZM4.25 12v-1.75H6V12ZM12 6V4.25h1.75V6ZM4.95 8.8H8.8V4.95H4.95Zm-.7.7V4.25H9.5V9.5Zm.7 9.55H9V15.2H4.95Zm-.7.7V14.5H9.7v5.25ZM15.2 8.8h3.85V4.95H15.2Zm-.7.7V4.25h5.25V9.5Zm1.75 10.25v-3.5H14.5V14.5H18V18h1.75v1.75Zm-3.25-6V12h3.25v1.75Zm-3.5 0V12H7.75v-1.75H13V12h-1.75v1.75Zm.75-4.25V6H12v1.75h1.75V9.5ZM6.275 7.475v-1.2h1.2v1.2ZM6.45 17.55v-1.2h1.2v1.2ZM16.525 7.475v-1.2h1.2v1.2Z"/>
    </Icon>
  );
});

IconMaterialQrCode2W100.displayName = 'AmauiIconMaterialQrCode2W100';

export default IconMaterialQrCode2W100;
