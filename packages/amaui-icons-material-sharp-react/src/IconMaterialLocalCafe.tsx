import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCafe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafe'

      short_name='LocalCafe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2h16v2Zm0-4V3h16q.825 0 1.413.587Q22 4.175 22 5v3q0 .825-.587 1.412Q20.825 10 20 10h-2v7Zm2-2h10V5H6Zm12-7h2V5h-2Zm-7 2Z"/>
    </Icon>
  );
});

IconMaterialLocalCafe.displayName = 'AmauiIconMaterialLocalCafe';

export default IconMaterialLocalCafe;
