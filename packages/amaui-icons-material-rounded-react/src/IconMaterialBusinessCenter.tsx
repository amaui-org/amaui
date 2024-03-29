import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenter'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 6V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21H4q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6Zm2 0h4V4h-4Zm10 9h-5v1q0 .425-.287.712Q14.425 17 14 17h-4q-.425 0-.712-.288Q9 16.425 9 16v-1H4v4h16Zm-9 0h2v-2h-2Zm-7-2h5v-1q0-.425.288-.713Q9.575 11 10 11h4q.425 0 .713.287.287.288.287.713v1h5V8H4Zm8 1Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenter.displayName = 'AmauiIconMaterialBusinessCenter';

export default IconMaterialBusinessCenter;
