import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowTwoTone'
      short_name='Window'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="7" opacity=".3" width="7" x="4" y="4"/><rect height="7" opacity=".3" width="7" x="4" y="13"/><rect height="7" opacity=".3" width="7" x="13" y="13"/><rect height="7" opacity=".3" width="7" x="13" y="4"/><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M11,20H4v-7h7V20z M11,11H4V4h7V11 z M20,20h-7v-7h7V20z M20,11h-7V4h7V11z"/></g></g>
    </Icon>
  );
});

export default IconMaterialWindowTwoTone;
