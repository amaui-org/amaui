import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward'

      short_name='Forward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19h2v-4q0-1.25.875-2.125T8 12h9.2l-3.6 3.6L15 17l6-6-6-6-1.4 1.4 3.6 3.6H8q-2.075 0-3.537 1.462Q3 12.925 3 15Z"/>
    </Icon>
  );
});

IconMaterialForward.displayName = 'AmauiIconMaterialForward';

export default IconMaterialForward;
