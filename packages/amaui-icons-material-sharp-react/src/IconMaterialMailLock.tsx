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
      <path d="M4 18h12v2H2V4h20v6h-2V8l-8 5-8-5Zm8-7 8-5H4Zm-8 7V6v2Zm14 2v-5h1v-1q0-.825.587-1.413Q20.175 12 21 12q.825 0 1.413.587Q23 13.175 23 14v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q21.425 13 21 13t-.712.287Q20 13.575 20 14Z"/>
    </Icon>
  );
});

IconMaterialMailLock.displayName = 'AmauiIconMaterialMailLock';

export default IconMaterialMailLock;
