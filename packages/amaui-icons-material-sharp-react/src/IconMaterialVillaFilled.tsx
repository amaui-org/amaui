import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVillaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaFilled'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-9h8q0-.825.587-1.413Q18.175 10 19 10q.825 0 1.413.587Q21 11.175 21 12v9h-5v-5h-2v5Zm-6 0V8l13-5v7H7v11Z"/>
    </Icon>
  );
});

IconMaterialVillaFilled.displayName = 'AmauiIconMaterialVillaFilled';

export default IconMaterialVillaFilled;
