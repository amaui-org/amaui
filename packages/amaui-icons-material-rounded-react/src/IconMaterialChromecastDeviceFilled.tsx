import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromecastDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDeviceFilled'

      short_name='ChromecastDevice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 14.5v-5h3v5ZM6 17.25q-1.875 0-3.438-1.125Q1 15 1 13.5v-3Q1 9 2.562 7.875 4.125 6.75 6 6.75q1.05 0 1.788.237.737.238 1.362.513.475.2.912.35Q10.5 8 11 8h8v8h-8q-.5 0-.938.15-.437.15-.912.35-.625.275-1.362.512-.738.238-1.788.238ZM2.5 12.5h1q.2 0 .35-.15Q4 12.2 4 12q0-.2-.15-.35-.15-.15-.35-.15h-1q-.2 0-.35.15Q2 11.8 2 12q0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialChromecastDeviceFilled.displayName = 'AmauiIconMaterialChromecastDeviceFilled';

export default IconMaterialChromecastDeviceFilled;
