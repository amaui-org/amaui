import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHorizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizW100'

      short_name='SwapHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 12.85q-.125-.125-.125-.25t.125-.25l3-3H12q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7.75l-3-3q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l3.325 3.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L17.25 12.85q-.125.125-.25.125t-.25-.125Zm-10 6-3.325-3.325q-.125-.125-.175-.25Q3.2 15.15 3.2 15q0-.15.05-.275.05-.125.175-.25L6.75 11.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-3 3H12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.25l3 3q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizW100.displayName = 'AmauiIconMaterialSwapHorizW100';

export default IconMaterialSwapHorizW100;
