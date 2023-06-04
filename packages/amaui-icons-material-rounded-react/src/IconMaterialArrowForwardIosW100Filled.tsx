import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100Filled'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.575 20.675Q7.4 20.5 7.4 20.25t.175-.425L15.4 12 7.55 4.15q-.175-.175-.175-.4 0-.225.2-.425Q7.75 3.15 8 3.15t.425.175l8.15 8.15q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L8.4 20.7q-.175.175-.4.175-.225 0-.425-.2Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100Filled.displayName = 'AmauiIconMaterialArrowForwardIosW100Filled';

export default IconMaterialArrowForwardIosW100Filled;
