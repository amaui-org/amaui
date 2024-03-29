import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailFilled'

      short_name='Hail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6ZM9 22V10.1q-1.25.425-1.625 1.562Q7 12.8 7 14H5q0-3.2 1.875-5.1Q8.75 7 12 7q2.5 0 3.75-1.238Q17 4.525 17 2h2q0 2.2-.938 3.938Q17.125 7.675 15 8.4V22h-2v-6h-2v6Zm-5 0v-6h3v6Z"/>
    </Icon>
  );
});

IconMaterialHailFilled.displayName = 'AmauiIconMaterialHailFilled';

export default IconMaterialHailFilled;
