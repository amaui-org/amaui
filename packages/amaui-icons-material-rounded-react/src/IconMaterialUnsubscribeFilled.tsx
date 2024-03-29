import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeFilled'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23q-2.075 0-3.537-1.462Q14 20.075 14 18q0-2.075 1.463-3.538Q16.925 13 19 13t3.538 1.462Q24 15.925 24 18q0 2.075-1.462 3.538Q21.075 23 19 23Zm-2.5-4.5h5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v5.7q-.625-.3-1.462-.5Q19.7 11 19 11q-1.45 0-2.725.55-1.275.55-2.225 1.5-.95.95-1.5 2.225Q12 16.55 12 18q0 .525.075 1.012.075.488.225.988Zm8-7.175q.125 0 .262-.038.138-.037.263-.112L19.6 8.25q.2-.125.3-.3.1-.175.1-.425 0-.45-.4-.725-.4-.275-.9 0L12 11 5.3 6.8q-.475-.275-.888-.013Q4 7.05 4 7.525q0 .25.1.425t.3.3l7.075 4.425q.125.075.263.112.137.038.262.038Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeFilled.displayName = 'AmauiIconMaterialUnsubscribeFilled';

export default IconMaterialUnsubscribeFilled;
