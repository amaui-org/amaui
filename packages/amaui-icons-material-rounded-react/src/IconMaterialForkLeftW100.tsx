import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkLeftW100'

      short_name='ForkLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20.35q-.15 0-.25-.1t-.1-.25v-3.1q-.525-1.9-1.862-2.838-1.338-.937-2.888-.937-.65 0-1.338.063-.687.062-1.287.162l2 2q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L5.45 13.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l2.325-2.325q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2 2q.6-.1 1.25-.15.65-.05 1.375-.05 1.525 0 2.738.675 1.212.675 2.012 2.025V5.275l-2 2q-.1.1-.237.1-.138 0-.263-.1-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.325 2.325q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialForkLeftW100.displayName = 'AmauiIconMaterialForkLeftW100';

export default IconMaterialForkLeftW100;
