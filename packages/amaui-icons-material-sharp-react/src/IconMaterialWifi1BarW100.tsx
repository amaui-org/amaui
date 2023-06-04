import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarW100'

      short_name='Wifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-2.125-2.125q.425-.425.963-.65Q11.375 18 12 18q.625 0 1.163.225.537.225.962.65Z"/>
    </Icon>
  );
});

IconMaterialWifi1BarW100.displayName = 'AmauiIconMaterialWifi1BarW100';

export default IconMaterialWifi1BarW100;
