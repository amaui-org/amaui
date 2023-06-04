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
      <path d="M12 11 4 6v2l8 5 8-5V6Zm6 9v-5h1v-1q0-.825.587-1.413Q20.175 12 21 12q.825 0 1.413.587Q23 13.175 23 14v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q21.425 13 21 13t-.712.287Q20 13.575 20 14ZM2 20V4h20v6h-1q-2.075 0-3.538 1.462Q16 12.925 16 15v5Z"/>
    </Icon>
  );
});

IconMaterialMailLockFilled.displayName = 'AmauiIconMaterialMailLockFilled';

export default IconMaterialMailLockFilled;
