import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cases'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.825 0-1.412-.587Q1 20.825 1 20V10q0-.425.288-.713Q1.575 9 2 9t.713.287Q3 9.575 3 10v10h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22Zm4-4q-.825 0-1.412-.587Q5 16.825 5 16V7q0-.825.588-1.412Q6.175 5 7 5h3V3q0-.825.588-1.413Q11.175 1 12 1h4q.825 0 1.413.587Q18 2.175 18 3v2h3q.825 0 1.413.588Q23 6.175 23 7v9q0 .825-.587 1.413Q21.825 18 21 18Zm5-13h4V3h-4ZM7 16h14V7H7v9Zm0 0V7v9Z"/>
    </Icon>
  );
});

IconMaterialCases.displayName = 'AmauiIconMaterialCases';

export default IconMaterialCases;
