import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotificationsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 12.65v-1.225l5.1-5.1L19.25 7.55l-5.1 5.1Zm7.025-5.8.975-.975L19.7 4.65l-.975.975Zm-15.3 11.8v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q.55.1 1.25.375t1.275.775l-.5.5q-.6-.475-1.375-.738-.775-.262-1.5-.262-1.925 0-3.287 1.362Q7.35 8.375 7.35 10.3v7.65h9.3v-4.975l.7-.7v5.675h2v.7ZM12 21.5q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm0-9.7Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100.displayName = 'AmauiIconMaterialEditNotificationsW100';

export default IconMaterialEditNotificationsW100;
