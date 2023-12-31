import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiProFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiProFilled'

      short_name='NestWifiPro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q25 0 42.5-17.5T540-340q0-25-17.5-42.5T480-400q-25 0-42.5 17.5T420-340q0 25 17.5 42.5T480-280ZM360-80q-77 0-124-40t-73-100q-26-61-34.5-130T120-479q0-102 15.5-176.5T192-781q41-50 110-74.5T480-880q109 0 178 24.5T768-781q41 51 56.5 125.5T840-479q0 60-8.5 129T797-220q-26 60-73 100T600-80H360Z"/>
    </Icon>
  );
});

IconMaterialNestWifiProFilled.displayName = 'AmauiIconMaterialNestWifiProFilled';

export default IconMaterialNestWifiProFilled;
