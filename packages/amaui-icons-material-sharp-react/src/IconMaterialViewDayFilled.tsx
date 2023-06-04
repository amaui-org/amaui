import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayFilled'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-2h18v2Zm0-4V8h18v8ZM3 6V4h18v2Z"/>
    </Icon>
  );
});

IconMaterialViewDayFilled.displayName = 'AmauiIconMaterialViewDayFilled';

export default IconMaterialViewDayFilled;
