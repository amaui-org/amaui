import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOff'

      short_name='NotificationsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-.825.213-1.625.212-.8.637-1.525l1.5 1.5q-.175.4-.262.812Q8 9.575 8 10v7h6.2L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275L16.15 19Zm13-3.85-2-2V10q0-1.65-1.175-2.825Q13.65 6 12 6q-.675 0-1.262.213-.588.212-1.088.587L8.2 5.35q.5-.375 1.075-.688Q9.85 4.35 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q1.95.5 3.225 2.087Q18 7.875 18 10Zm-6.925-1.25ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm.825-12.025Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOff.displayName = 'AmauiIconMaterialNotificationsOff';

export default IconMaterialNotificationsOff;
