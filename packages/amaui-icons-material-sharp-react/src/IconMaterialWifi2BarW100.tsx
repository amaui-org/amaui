import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarW100'

      short_name='Wifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.35 15.35-.7-.7Q6.9 13.4 8.512 12.7 10.125 12 12 12t3.488.7q1.612.7 2.862 1.95l-.7.7q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625-1.45.625-2.55 1.725ZM12 21l2.125-2.125q-.425-.425-.962-.65Q12.625 18 12 18t-1.162.225q-.538.225-.963.65Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarW100.displayName = 'AmauiIconMaterialWifi2BarW100';

export default IconMaterialWifi2BarW100;
