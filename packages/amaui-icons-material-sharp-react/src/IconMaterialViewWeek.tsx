import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeek'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18h4V6H4Zm6 0h4V6h-4Zm6 0h4V6h-4Zm6 2H2V4h20Z"/>
    </Icon>
  );
});

IconMaterialViewWeek.displayName = 'AmauiIconMaterialViewWeek';

export default IconMaterialViewWeek;
