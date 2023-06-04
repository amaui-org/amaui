import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 6.3h14.4v11.4H4.8ZM10 7v4.65h8.5V7Zm8.5 5.35h-3.9V17h3.9Zm-8.5 0V17h3.9v-4.65ZM5.5 17h3.8V7H5.5Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100.displayName = 'AmauiIconMaterialViewQuiltW100';

export default IconMaterialViewQuiltW100;
