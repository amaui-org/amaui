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
      <path d="M12.075 19.7q-3.2 0-5.45-2.25T4.375 12q0-2.825 1.787-4.938Q7.95 4.95 10.625 4.425q-.35.7-.55 1.475-.2.775-.2 1.6 0 2.8 1.95 4.75 1.95 1.95 4.75 1.95.825 0 1.6-.2.775-.2 1.45-.55-.5 2.675-2.613 4.463Q14.9 19.7 12.075 19.7Zm0-.7q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.237-2.162Q9.175 10.575 9.175 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55Q5.075 9.8 5.075 12q0 2.9 2.05 4.95Q9.175 19 12.075 19Zm-.25-6.75Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100.displayName = 'AmauiIconMaterialDarkModeW100';

export default IconMaterialDarkModeW100;
