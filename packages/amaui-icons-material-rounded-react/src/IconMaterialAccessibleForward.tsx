import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForward'

      short_name='AccessibleForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 6.5q-.825 0-1.413-.588Q16 5.325 16 4.5t.587-1.413Q17.175 2.5 18 2.5q.825 0 1.413.587Q20 3.675 20 4.5q0 .825-.587 1.412Q18.825 6.5 18 6.5ZM10 22q-2.075 0-3.537-1.462Q5 19.075 5 17q0-2.075 1.463-3.538Q7.925 12 10 12v2q-1.25 0-2.125.875T7 17q0 1.25.875 2.125T10 20q1.25 0 2.125-.875T13 17h2q0 2.075-1.462 3.538Q12.075 22 10 22Zm9-1q-.425 0-.712-.288Q18 20.425 18 20v-4h-5q-1.1 0-1.7-.938-.6-.937-.15-1.962L13 9h-2.275l-.3.75q-.125.325-.45.487-.325.163-.675.063-.45-.125-.663-.525-.212-.4-.037-.825l.3-.75q.225-.575.737-.888Q10.15 7 10.75 7h5.2q1.125 0 1.713.912.587.913.137 1.938l-1.65 3.65H18q.825 0 1.413.587.587.588.587 1.413V20q0 .425-.288.712Q19.425 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForward.displayName = 'AmauiIconMaterialAccessibleForward';

export default IconMaterialAccessibleForward;
