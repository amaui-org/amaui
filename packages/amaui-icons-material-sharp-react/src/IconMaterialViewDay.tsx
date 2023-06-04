import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDay'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-2h18v2Zm0-4V8h18v8Zm2-2h14v-4H5ZM3 6V4h18v2Zm2 8v-4 4Z"/>
    </Icon>
  );
});

IconMaterialViewDay.displayName = 'AmauiIconMaterialViewDay';

export default IconMaterialViewDay;
