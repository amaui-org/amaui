import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestGaleWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifiW100'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-224-10.377-32H228.86q-27.939 0-46.899-20Q163-296 165-324l23.147-352q1.596-25.6 19.954-42.8Q226.459-736 252-736h456q25.541 0 43.899 17.2t19.954 42.8L795-324q2 28-16.993 48-18.994 20-46.983 20H714.23l-10.396 32H256Zm-13-320h474l-8.804-128H252l-9 128Zm-4 64-10 160h502l-10.4-160H239Zm241-16Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifiW100.displayName = 'AmauiIconMaterialNestGaleWifiW100';

export default IconMaterialNestGaleWifiW100;
