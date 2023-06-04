import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareArrowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsW100Filled'

      short_name='CompareArrows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.75 12.85-3.325-3.325q-.125-.125-.175-.25Q12.2 9.15 12.2 9q0-.15.05-.275.05-.125.175-.25L15.75 5.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-3 3H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-7.75l3 3q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Zm-8 6q.125.125.25.125t.25-.125l3.325-3.325q.125-.125.175-.25.05-.125.05-.275 0-.15-.05-.275-.05-.125-.175-.25L8.25 11.15q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l3 3H3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h7.75l-3 3q-.125.125-.125.25t.125.25Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsW100Filled.displayName = 'AmauiIconMaterialCompareArrowsW100Filled';

export default IconMaterialCompareArrowsW100Filled;
