import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPrevious = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPrevious'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 18V6h2v12Zm13 0-9-6 9-6Zm-2-6Zm0 2.25v-4.5L13.1 12Z"/>
    </Icon>
  );
});

IconMaterialSkipPrevious.displayName = 'AmauiIconMaterialSkipPrevious';

export default IconMaterialSkipPrevious;
