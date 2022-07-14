import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitTwoTone'
      short_name='CallSplit'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4h-6l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10zM4 4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z"/>
    </Icon>
  );
});

export default IconMaterialCallSplitTwoTone;
