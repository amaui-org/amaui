import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamFilled'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19v-6h18v6Zm0-8V5h18v6Z"/>
    </Icon>
  );
});

IconMaterialViewStreamFilled.displayName = 'AmauiIconMaterialViewStreamFilled';

export default IconMaterialViewStreamFilled;
