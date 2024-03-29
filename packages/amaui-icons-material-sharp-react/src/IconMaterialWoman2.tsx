import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoman2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2'

      short_name='Woman2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 22v-6H7l3.575-9h2.85L17 16h-3.5v6ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialWoman2.displayName = 'AmauiIconMaterialWoman2';

export default IconMaterialWoman2;
