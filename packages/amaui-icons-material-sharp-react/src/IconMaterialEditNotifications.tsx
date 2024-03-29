import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotifications'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.6 13v-1.775l4.975-4.975 1.775 1.775L14.375 13ZM20 7.375l1.225-1.225-1.775-1.775L18.225 5.6ZM4 19v-2h2v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2V2h3v2.2q.625.15 1.175.437.55.288 1.025.663l-1.425 1.425q-.475-.35-1.05-.537Q12.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10v7h8v-2.8l2-2V17h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm0-10.5Z"/>
    </Icon>
  );
});

IconMaterialEditNotifications.displayName = 'AmauiIconMaterialEditNotifications';

export default IconMaterialEditNotifications;
