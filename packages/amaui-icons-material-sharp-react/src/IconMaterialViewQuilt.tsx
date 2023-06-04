import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuilt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuilt'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5h18v14H3Zm7.325 2v4H19V7ZM19 13h-3.325v4H19Zm-8.675 0v4h3.35v-4ZM5 17h3.325V7H5Z"/>
    </Icon>
  );
});

IconMaterialViewQuilt.displayName = 'AmauiIconMaterialViewQuilt';

export default IconMaterialViewQuilt;
