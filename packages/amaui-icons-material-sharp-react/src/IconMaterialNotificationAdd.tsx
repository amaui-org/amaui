import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAdd'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-2h2v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2V2h3v2.2q.625.15 1.175.425T15.7 5.3l-.712.712-.713.713q-.475-.35-1.05-.537Q12.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10v7h8v-3h2v3h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm7-9v-3h-3V8h3V5h2v3h3v2h-3v3Zm-7-1.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationAdd.displayName = 'AmauiIconMaterialNotificationAdd';

export default IconMaterialNotificationAdd;
