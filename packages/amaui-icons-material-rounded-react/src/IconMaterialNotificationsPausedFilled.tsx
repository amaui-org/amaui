import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedFilled'

      short_name='NotificationsPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.525 16h3.325q.375 0 .638-.262.262-.263.262-.638t-.262-.638q-.263-.262-.638-.262H12l2.425-2.975q.175-.2.25-.438.075-.237.075-.512 0-.5-.387-.888Q13.975 9 13.475 9H10.15q-.375 0-.638.262-.262.263-.262.638t.262.637q.263.263.638.263H12l-2.425 2.975q-.175.2-.25.437-.075.238-.075.513 0 .5.387.888.388.387.888.387ZM5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedFilled.displayName = 'AmauiIconMaterialNotificationsPausedFilled';

export default IconMaterialNotificationsPausedFilled;
