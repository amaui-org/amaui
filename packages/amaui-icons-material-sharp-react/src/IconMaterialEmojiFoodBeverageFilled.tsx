import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageFilled'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2h16v2ZM18 8h2V5h-2ZM4 17V3h5v2.4L7 7v5h5V7l-2-1.6V3h10q.825 0 1.413.587Q22 4.175 22 5v3q0 .825-.587 1.412Q20.825 10 20 10h-2v7Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageFilled.displayName = 'AmauiIconMaterialEmojiFoodBeverageFilled';

export default IconMaterialEmojiFoodBeverageFilled;
