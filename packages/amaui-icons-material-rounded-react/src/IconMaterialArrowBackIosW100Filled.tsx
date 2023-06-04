import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosW100Filled'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.575 20.675-8.15-8.15q-.125-.125-.175-.25Q1.2 12.15 1.2 12q0-.15.05-.275.05-.125.175-.25L9.6 3.3q.175-.175.4-.175.225 0 .425.2.175.175.175.425t-.175.425L2.6 12l7.85 7.85q.175.175.175.4 0 .225-.2.425-.175.175-.425.175t-.425-.175Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosW100Filled.displayName = 'AmauiIconMaterialArrowBackIosW100Filled';

export default IconMaterialArrowBackIosW100Filled;
