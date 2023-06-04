import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewW100'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.575 20.675-8.15-8.15q-.125-.125-.175-.25Q7.2 12.15 7.2 12q0-.15.05-.275.05-.125.175-.25L15.6 3.3q.175-.175.4-.175.225 0 .425.2.175.175.175.425t-.175.425L8.6 12l7.85 7.85q.175.175.175.4 0 .225-.2.425-.175.175-.425.175t-.425-.175Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewW100.displayName = 'AmauiIconMaterialArrowBackIosNewW100';

export default IconMaterialArrowBackIosNewW100;
