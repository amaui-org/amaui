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
      <path d="M12 21q-.825 0-1.412-.587Q10 19.825 10 19q0-.825.588-1.413Q11.175 17 12 17t1.413.587Q14 18.175 14 19q0 .825-.587 1.413Q12.825 21 12 21Zm-2-6V3h4v12Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighFilled.displayName = 'AmauiIconMaterialPriorityHighFilled';

export default IconMaterialPriorityHighFilled;
