import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSend'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.975 17.725 18.35 19.1q.15.15.375.15t.375-.15q.15-.15.15-.375t-.15-.375L17.75 17l1.375-1.375q.15-.15.15-.375t-.15-.375q-.15-.15-.375-.15t-.375.15L17 16.25l-1.375-1.375q-.15-.15-.375-.15t-.375.15q-.15.15-.15.375t.15.375L16.25 17l-1.4 1.4q-.15.15-.137.35.012.2.162.35.15.15.363.15.212 0 .362-.15ZM3 18.5q0 .55.45.837.45.288.95.088L10 17.05V17q0-.6.1-1.163.1-.562.3-1.137L5 17v-3.5l6-1.5-6-1.5V7l8.85 3.75q.725-.35 1.5-.55.775-.2 1.65-.2h.3L4.375 4.575q-.5-.2-.937.087Q3 4.95 3 5.5ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22ZM5 14.7V17 7v7.7Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSend.displayName = 'AmauiIconMaterialCancelScheduleSend';

export default IconMaterialCancelScheduleSend;
