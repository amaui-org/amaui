import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareFilled'

      short_name='EmergencyShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 24q-3.025-2.575-4.513-4.775Q6 17.025 6 15.15q0-2.575 1.75-4.363Q9.5 9 12 9t4.25 1.787Q18 12.575 18 15.15q0 1.875-1.488 4.075Q15.025 21.425 12 24Zm0-7.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 13.5 12 13.5t-1.062.438Q10.5 14.375 10.5 15t.438 1.062q.437.438 1.062.438ZM8.45 7.45l-1.4-1.4q1-1 2.262-1.525Q10.575 4 12 4q1.425 0 2.688.525 1.262.525 2.262 1.525l-1.4 1.4q-.7-.7-1.612-1.075Q13.025 6 12 6t-1.938.375Q9.15 6.75 8.45 7.45Zm-2.8-2.825-1.425-1.4Q5.8 1.65 7.8.825T12 0q2.2 0 4.2.825t3.575 2.4l-1.4 1.425Q17.1 3.375 15.45 2.688 13.8 2 12 2q-1.8 0-3.438.675-1.637.675-2.912 1.95Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareFilled.displayName = 'AmauiIconMaterialEmergencyShareFilled';

export default IconMaterialEmergencyShareFilled;
