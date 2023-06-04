import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighFilled'

      short_name='PriorityHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.825 0-1.412-.587Q10 19.825 10 19q0-.825.588-1.413Q11.175 17 12 17t1.413.587Q14 18.175 14 19q0 .825-.587 1.413Q12.825 21 12 21Zm0-6q-.825 0-1.412-.588Q10 13.825 10 13V5q0-.825.588-1.413Q11.175 3 12 3t1.413.587Q14 4.175 14 5v8q0 .825-.587 1.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighFilled.displayName = 'AmauiIconMaterialPriorityHighFilled';

export default IconMaterialPriorityHighFilled;
