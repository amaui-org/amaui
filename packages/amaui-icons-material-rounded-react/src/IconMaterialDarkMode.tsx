import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDarkMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkMode'

      short_name='DarkMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225.762-.225 1.362-.625.525-.35 1.075-.038.55.313.475.988-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"/>
    </Icon>
  );
});

IconMaterialDarkMode.displayName = 'AmauiIconMaterialDarkMode';

export default IconMaterialDarkMode;
