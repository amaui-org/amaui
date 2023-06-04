import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeekFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekFilled'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h5.325v16Zm7.35 0V4h5.325v16Zm7.325 0V4H22v16Z"/>
    </Icon>
  );
});

IconMaterialViewWeekFilled.displayName = 'AmauiIconMaterialViewWeekFilled';

export default IconMaterialViewWeekFilled;
