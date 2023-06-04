import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2Filled'

      short_name='Brightness2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 12q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.575 22 9.5 22q-.8 0-1.675-.15t-1.675-.425q-.3-.125-.475-.387-.175-.263-.175-.588 0-.225.088-.425.087-.2.262-.325 1.775-1.475 2.712-3.488Q9.5 14.2 9.5 12q0-2.2-.938-4.213Q7.625 5.775 5.85 4.3q-.175-.125-.262-.325-.088-.2-.088-.425 0-.325.175-.588.175-.262.475-.387.8-.275 1.675-.425Q8.7 2 9.5 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175.788 1.825.788 3.9Z"/>
    </Icon>
  );
});

IconMaterialBrightness2Filled.displayName = 'AmauiIconMaterialBrightness2Filled';

export default IconMaterialBrightness2Filled;
