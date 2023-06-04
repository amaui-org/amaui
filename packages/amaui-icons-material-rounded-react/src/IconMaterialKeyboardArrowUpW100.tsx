import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpW100'

      short_name='KeyboardArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 14.25q-.125-.125-.125-.25t.125-.25l4.325-4.325q.125-.125.263-.175.137-.05.262-.05.15 0 .275.05.125.05.25.175l4.325 4.325q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L12 9.9l-4.35 4.35q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpW100.displayName = 'AmauiIconMaterialKeyboardArrowUpW100';

export default IconMaterialKeyboardArrowUpW100;
