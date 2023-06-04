import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 18V9.6H4V6.4h16v3.2h1.7V18Zm3.4-4.05h12.6V9.6h1V7.1H4.7v2.5h1ZM3 17.3h18v-7h-2v4.35H5V10.3H3Zm9-2.65Zm0-.7Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100.displayName = 'AmauiIconMaterialWeekendW100';

export default IconMaterialWeekendW100;
