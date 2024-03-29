import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamIndoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIndoor'

      short_name='NestCamIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-.825 0-1.412-.588Q10 9.825 10 9t.588-1.413Q11.175 7 12 7t1.413.587Q14 8.175 14 9q0 .825-.587 1.412Q12.825 11 12 11ZM7 22q0-.825.588-1.413Q8.175 20 9 20h2q0-1.725-.775-3.013Q9.45 15.7 8.15 14.85q-1.5-.975-2.325-2.475Q5 10.875 5 9q0-2.925 2.038-4.963Q9.075 2 12 2t4.962 2.037Q19 6.075 19 9q0 1.875-.875 3.4T15.8 14.875q-1.275.8-2.038 2.1Q13 18.275 13 20h2q.825 0 1.413.587Q17 21.175 17 22Zm5-8q2.075 0 3.538-1.463Q17 11.075 17 9t-1.462-3.537Q14.075 4 12 4 9.925 4 8.463 5.463 7 6.925 7 9t1.463 3.537Q9.925 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialNestCamIndoor.displayName = 'AmauiIconMaterialNestCamIndoor';

export default IconMaterialNestCamIndoor;
