import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputW100'

      short_name='Input'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.75 14.85q-.125-.125-.125-.25t.125-.25l2-2H3.65q-.15 0-.25-.1T3.3 12q0-.15.1-.25t.25-.1h10.1l-2.025-2.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.35 2.35q-.1.1-.225.1t-.25-.125ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2v-1.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.5q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v1.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialInputW100.displayName = 'AmauiIconMaterialInputW100';

export default IconMaterialInputW100;
