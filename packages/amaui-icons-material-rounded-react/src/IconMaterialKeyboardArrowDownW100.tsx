import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownW100'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.2q-.125 0-.262-.05-.138-.05-.263-.175L7.15 9.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125L12 13.5l4.35-4.35q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-4.325 4.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownW100.displayName = 'AmauiIconMaterialKeyboardArrowDownW100';

export default IconMaterialKeyboardArrowDownW100;
