import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Policy'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 5.9q1.025-.275 2.038-1.013 1.012-.737 1.762-1.637l-1.8-1.8q-.45.275-.962.413Q12.525 16 12 16q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 .55-.137 1.062-.138.513-.413.988l1.5 1.5q.5-1.025.775-2.15T18 11.1V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0 2.1q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm.2-10Z"/>
    </Icon>
  );
});

IconMaterialPolicy.displayName = 'AmauiIconMaterialPolicy';

export default IconMaterialPolicy;
