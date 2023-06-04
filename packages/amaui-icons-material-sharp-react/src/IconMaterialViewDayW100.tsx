import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.4v-.7h15.4v.7Zm0-3.7V9.3h15.4v5.4ZM5 14h14v-4H5Zm-.7-7.7v-.7h15.4v.7ZM5 14v-4 4Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100.displayName = 'AmauiIconMaterialViewDayW100';

export default IconMaterialViewDayW100;
