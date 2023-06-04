import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapFilled'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 21-6-2.1-6 2.325V5.05L9 3l6 2.1 6-2.325V18.95Zm-1-2.45V6.85l-4-1.4v11.7Z"/>
    </Icon>
  );
});

IconMaterialMapFilled.displayName = 'AmauiIconMaterialMapFilled';

export default IconMaterialMapFilled;
