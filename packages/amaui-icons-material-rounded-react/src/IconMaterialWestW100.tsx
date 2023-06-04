import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestW100'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.95 17.925 3.575 12.55q-.125-.125-.175-.263-.05-.137-.05-.287 0-.15.05-.275.05-.125.175-.25l5.375-5.4q.1-.1.238-.1.137 0 .262.1t.112.25q-.012.15-.112.25L4.375 11.65h15.75q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.375l5.075 5.075q.125.125.125.263 0 .137-.125.237-.1.1-.25.1t-.25-.1Z"/>
    </Icon>
  );
});

IconMaterialWestW100.displayName = 'AmauiIconMaterialWestW100';

export default IconMaterialWestW100;
