import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextWeekW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekW100'

      short_name='NextWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 16.6 3.1-3.1-3.1-3.1-.5.5 2.6 2.6-2.6 2.6Zm-7.7 3.1V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4ZM4 19h16V8H4Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialNextWeekW100.displayName = 'AmauiIconMaterialNextWeekW100';

export default IconMaterialNextWeekW100;
