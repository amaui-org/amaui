import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockPerson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPerson'

      short_name='LockPerson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 18q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q18.625 15 18 15t-1.062.438q-.438.437-.438 1.062t.438 1.062Q17.375 18 18 18Zm0 3q.775 0 1.413-.363.637-.362 1.062-.962-.55-.325-1.175-.5T18 19q-.675 0-1.3.175t-1.175.5q.425.6 1.063.962Q17.225 21 18 21ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm3.25 14H6q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v1.3q-.45-.15-.938-.225Q18.575 11 18 11v-1H6v10h5.3q.2.6.4 1.038.2.437.55.962ZM18 23q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM6 10v10-10Z"/>
    </Icon>
  );
});

IconMaterialLockPerson.displayName = 'AmauiIconMaterialLockPerson';

export default IconMaterialLockPerson;
