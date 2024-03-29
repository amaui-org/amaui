import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamIq = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIq'

      short_name='NestCamIq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.825 0-1.412-.587Q7 20.825 7 20h4v-4.075Q8.425 15.55 6.713 13.6 5 11.65 5 9q0-2.925 2.038-4.963Q9.075 2 12 2t4.962 2.037Q19 6.075 19 9q0 2.65-1.712 4.6-1.713 1.95-4.288 2.325V20h4q0 .825-.587 1.413Q15.825 22 15 22Zm3-8q2.075 0 3.538-1.463Q17 11.075 17 9t-1.462-3.537Q14.075 4 12 4 9.925 4 8.463 5.463 7 6.925 7 9t1.463 3.537Q9.925 14 12 14Zm0-3q-.825 0-1.412-.588Q10 9.825 10 9t.588-1.413Q11.175 7 12 7t1.413.587Q14 8.175 14 9q0 .825-.587 1.412Q12.825 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialNestCamIq.displayName = 'AmauiIconMaterialNestCamIq';

export default IconMaterialNestCamIq;
