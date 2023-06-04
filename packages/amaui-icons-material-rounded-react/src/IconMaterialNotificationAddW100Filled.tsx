import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddW100Filled'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm8-9.15q-.15 0-.25-.1t-.1-.25V9.35H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H23q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V12q0 .15-.1.25t-.25.1Zm-15 6.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q.625.125 1.15.338.525.212.925.487-.475.65-.7 1.525Q14 8.225 14 9q0 1.725.913 3.188.912 1.462 2.437 2.212v3.55H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100Filled.displayName = 'AmauiIconMaterialNotificationAddW100Filled';

export default IconMaterialNotificationAddW100Filled;
