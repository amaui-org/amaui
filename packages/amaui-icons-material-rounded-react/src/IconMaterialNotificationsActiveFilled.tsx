import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveFilled'

      short_name='NotificationsActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 10q-.425 0-.712-.3Q2 9.4 2.05 9q.175-1.65.863-3.163.687-1.512 1.812-2.712.275-.275.7-.275.425 0 .725.3.275.275.275.675t-.275.725q-.875.95-1.412 2.062Q4.2 7.725 4.05 9q-.05.425-.337.712Q3.425 10 3 10Zm18 0q-.4 0-.7-.288-.3-.287-.35-.712-.15-1.275-.687-2.388Q18.725 5.5 17.85 4.55q-.275-.325-.275-.725 0-.4.3-.675.3-.3.712-.3.413 0 .688.275 1.125 1.2 1.813 2.712.687 1.513.862 3.163.05.4-.238.7-.287.3-.712.3ZM5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveFilled.displayName = 'AmauiIconMaterialNotificationsActiveFilled';

export default IconMaterialNotificationsActiveFilled;
