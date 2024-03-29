import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReply = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reply'

      short_name='Reply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 19v-4q0-1.25-.875-2.125T16 12H6.8l3.6 3.6L9 17l-6-6 6-6 1.4 1.4L6.8 10H16q2.075 0 3.538 1.462Q21 12.925 21 15v4Z"/>
    </Icon>
  );
});

IconMaterialReply.displayName = 'AmauiIconMaterialReply';

export default IconMaterialReply;
