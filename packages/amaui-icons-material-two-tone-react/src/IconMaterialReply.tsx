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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
    </Icon>
  );
});

IconMaterialReply.displayName = 'AmauiIconMaterialReply';

export default IconMaterialReply;
