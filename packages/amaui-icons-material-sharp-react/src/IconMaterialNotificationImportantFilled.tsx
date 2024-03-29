import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationImportantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationImportantFilled'

      short_name='NotificationImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13h2V8h-2Zm1 3q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm-8 3v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2V2h3v2.2q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationImportantFilled.displayName = 'AmauiIconMaterialNotificationImportantFilled';

export default IconMaterialNotificationImportantFilled;
