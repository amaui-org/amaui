import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltFilled'

      short_name='SystemUpdateAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h4q.425 0 .713.287Q9 4.575 9 5t-.287.713Q8.425 6 8 6H4v12h16V6h-4q-.425 0-.712-.287Q15 5.425 15 5t.288-.713Q15.575 4 16 4h4q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-5.025q-.2 0-.375-.063-.175-.062-.325-.212l-3.625-3.625Q7.4 10.8 7.4 10.4t.3-.7q.275-.275.7-.275.425 0 .7.275l1.9 1.9V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v6.6l1.925-1.925Q15.2 9.4 15.6 9.4t.7.3q.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltFilled.displayName = 'AmauiIconMaterialSystemUpdateAltFilled';

export default IconMaterialSystemUpdateAltFilled;
