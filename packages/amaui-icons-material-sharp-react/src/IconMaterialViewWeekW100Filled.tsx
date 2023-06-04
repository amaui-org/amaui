import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekW100Filled'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h5.325v13.4Zm6.025 0V5.3h5.35v13.4Zm6.05 0V5.3H20.7v13.4Z"/>
    </Icon>
  );
});

IconMaterialViewWeekW100Filled.displayName = 'AmauiIconMaterialViewWeekW100Filled';

export default IconMaterialViewWeekW100Filled;
