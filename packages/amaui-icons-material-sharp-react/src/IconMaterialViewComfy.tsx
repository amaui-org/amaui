import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfy'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm18-9V6H4v5Zm-10 7h10v-5H10Zm-6 0h4v-5H4Z"/>
    </Icon>
  );
});

IconMaterialViewComfy.displayName = 'AmauiIconMaterialViewComfy';

export default IconMaterialViewComfy;
