import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeekW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekW100'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18h4.875V6H4Zm5.575 0h4.85V6h-4.85Zm5.55 0H20V6h-4.875Zm5.575.7H3.3V5.3h17.4Z"/>
    </Icon>
  );
});

IconMaterialViewWeekW100.displayName = 'AmauiIconMaterialViewWeekW100';

export default IconMaterialViewWeekW100;
