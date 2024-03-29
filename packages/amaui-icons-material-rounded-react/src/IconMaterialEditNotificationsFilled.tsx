import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotificationsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsFilled'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 13q-.2 0-.35-.15-.15-.15-.15-.35v-1.075q0-.05.15-.35l4.825-4.825 1.775 1.775-4.825 4.825q-.05.05-.35.15ZM20 7.375 18.225 5.6l.85-.85q.15-.15.363-.15.212 0 .362.15l1.05 1.05q.15.15.15.362 0 .213-.15.363ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-7-3q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q.625.15 1.175.437.55.288 1.025.663l-4.525 4.525q-.275.275-.425.637-.15.363-.15.763V13q0 .825.588 1.412.587.588 1.412.588h1.775q.4 0 .762-.15.363-.15.638-.425L18 12.2V17h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsFilled.displayName = 'AmauiIconMaterialEditNotificationsFilled';

export default IconMaterialEditNotificationsFilled;
