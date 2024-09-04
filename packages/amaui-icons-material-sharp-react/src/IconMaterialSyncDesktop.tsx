import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDesktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDesktop'

      short_name='SyncDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M716-520q-7-41-27-76t-49-62v98h-80v-240h240v80H691q43 38 70.5 89T797-520h-81ZM600-280h200v-80H600v80Zm-80 80v-240h360v240H520Zm-360 40v-80h109q-51-44-80-106t-29-134q0-112 68-197.5T400-790v84q-70 25-115 86.5T240-480q0 54 21.5 99.5T320-302v-98h80v240H160Zm320 80v-80h440v80H480Zm120-200v-80 80Z"/>
    </Icon>
  );
});

IconMaterialSyncDesktop.displayName = 'AmauiIconMaterialSyncDesktop';

export default IconMaterialSyncDesktop;
