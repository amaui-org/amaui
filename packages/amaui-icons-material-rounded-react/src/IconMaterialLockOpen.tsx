import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpen'

      short_name='LockOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h9V6q0-1.25-.875-2.125T12 3q-1.025 0-1.812.612-.788.613-1.063 1.538-.125.375-.387.612Q8.475 6 8.125 6q-.5 0-.8-.338-.3-.337-.2-.762Q7.5 3.225 8.85 2.112 10.2 1 12 1q2.075 0 3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17Zm-6-7v10-10Z"/>
    </Icon>
  );
});

IconMaterialLockOpen.displayName = 'AmauiIconMaterialLockOpen';

export default IconMaterialLockOpen;
