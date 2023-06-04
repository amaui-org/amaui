import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltFilled'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 11.5V5H21v6.5Zm6.1 7.5v-6.5H21V19Zm-6.1 0v-6.5h5.1V19ZM3 19V5h5.825v14Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltFilled.displayName = 'AmauiIconMaterialViewQuiltFilled';

export default IconMaterialViewQuiltFilled;
