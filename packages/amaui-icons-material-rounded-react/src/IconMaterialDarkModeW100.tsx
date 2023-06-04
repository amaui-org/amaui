import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDarkModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100'

      short_name='DarkMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.075 19.7q-3.2 0-5.45-2.25T4.375 12q0-2.175 1.162-4.1Q6.7 5.975 9.025 4.925q.575-.275.888.05.312.325.187.8-.125.425-.175.85-.05.425-.05.875 0 2.8 1.95 4.75 1.95 1.95 4.75 1.95.675 0 1.2-.125.525-.125.875-.125.4 0 .575.238.175.237 0 .662-.825 2.15-2.762 3.5-1.938 1.35-4.388 1.35Zm0-.7q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.237-2.162Q9.175 10.575 9.175 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55Q5.075 9.8 5.075 12q0 2.9 2.05 4.95Q9.175 19 12.075 19Zm-.25-6.75Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100.displayName = 'AmauiIconMaterialDarkModeW100';

export default IconMaterialDarkModeW100;
