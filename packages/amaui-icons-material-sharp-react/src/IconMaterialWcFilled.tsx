import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcFilled'

      short_name='Wc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 22v-7.5H4V7h7v7.5H9.5V22Zm9.5 0v-6h-3l3-9h3l3 9h-3v6ZM7.5 6q-.825 0-1.412-.588Q5.5 4.825 5.5 4t.588-1.413Q6.675 2 7.5 2t1.413.587Q9.5 3.175 9.5 4q0 .825-.587 1.412Q8.325 6 7.5 6Zm9 0q-.825 0-1.412-.588Q14.5 4.825 14.5 4t.588-1.413Q15.675 2 16.5 2t1.413.587Q18.5 3.175 18.5 4q0 .825-.587 1.412Q17.325 6 16.5 6Z"/>
    </Icon>
  );
});

IconMaterialWcFilled.displayName = 'AmauiIconMaterialWcFilled';

export default IconMaterialWcFilled;
