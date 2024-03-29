import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelScheduleSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendFilled'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.975 17.725 18.35 19.1q.15.15.375.15t.375-.15q.15-.15.15-.375t-.15-.375L17.75 17l1.375-1.375q.15-.15.15-.375t-.15-.375q-.15-.15-.375-.15t-.375.15L17 16.25l-1.375-1.375q-.15-.15-.375-.15t-.375.15q-.15.15-.15.375t.15.375L16.25 17l-1.4 1.4q-.15.15-.137.35.012.2.162.35.15.15.363.15.212 0 .362-.15ZM3 18.5v-3.725q0-.35.2-.625t.55-.35L11 12l-7.25-1.8q-.35-.075-.55-.35-.2-.275-.2-.625V5.5q0-.55.438-.838.437-.287.937-.087L17.3 10H17q-2.925 0-4.962 2.062Q10 14.125 10 17.05l-5.6 2.375q-.5.2-.95-.088Q3 19.05 3 18.5ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendFilled.displayName = 'AmauiIconMaterialCancelScheduleSendFilled';

export default IconMaterialCancelScheduleSendFilled;
