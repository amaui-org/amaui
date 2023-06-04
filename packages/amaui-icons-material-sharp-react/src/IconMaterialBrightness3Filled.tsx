import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3Filled'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.8 0-1.537-.113-.738-.112-1.463-.337 3.15-1.025 5.075-3.65Q13 15.275 13 12q0-3.275-1.925-5.9Q9.15 3.475 6 2.45q.725-.225 1.463-.338Q8.2 2 9 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q19 9.925 19 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.075 22 9 22Z"/>
    </Icon>
  );
});

IconMaterialBrightness3Filled.displayName = 'AmauiIconMaterialBrightness3Filled';

export default IconMaterialBrightness3Filled;
