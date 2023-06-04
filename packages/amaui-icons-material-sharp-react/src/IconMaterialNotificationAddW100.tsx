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
      <path d="M4.65 18.65v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q.625.125 1.175.35.55.225 1.05.575l-.25.25-.25.25q-.55-.35-1.212-.563Q12.7 5.65 12 5.65q-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3v7.65h9.3v-3.975h.7v3.975h2v.7ZM12 21.5q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm7.65-9.15v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3ZM12 11.8Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100.displayName = 'AmauiIconMaterialNotificationAddW100';

export default IconMaterialNotificationAddW100;
