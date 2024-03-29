import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.675 19.1q2-1.05 3.163-2.963Q17 14.225 17 12q0-2.225-1.162-4.138Q14.675 5.95 12.675 4.9 13.8 6.45 14.4 8.262 15 10.075 15 12t-.6 3.738q-.6 1.812-1.725 3.362ZM9 22q-.8 0-1.537-.113-.738-.112-1.463-.337 3.15-1.025 5.075-3.65Q13 15.275 13 12q0-3.275-1.925-5.9Q9.15 3.475 6 2.45q.725-.225 1.463-.338Q8.2 2 9 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q19 9.925 19 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.075 22 9 22Zm6-10Z"/>
    </Icon>
  );
});

IconMaterialBrightness3.displayName = 'AmauiIconMaterialBrightness3';

export default IconMaterialBrightness3;
