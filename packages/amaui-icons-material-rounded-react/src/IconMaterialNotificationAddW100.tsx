import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddW100'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5v-.7q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613V5q.625.125 1.175.35.55.225 1.05.575l-.25.25-.25.25q-.55-.35-1.212-.563Q12.7 5.65 12 5.65q-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3v7.65h9.3v-3.975h.7v3.975H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 2.85q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm8-9.15q-.15 0-.25-.1t-.1-.25V9.35H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H23q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V12q0 .15-.1.25t-.25.1Zm-8-.55Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100.displayName = 'AmauiIconMaterialNotificationAddW100';

export default IconMaterialNotificationAddW100;
