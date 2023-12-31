import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeartW100Filled'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m481-348 112-112q14-14 18-33.5t-4-37.5q-8-18-24-29.5T547-572q-20 0-36 12t-30 26q-14-14-29.5-26T416-572q-20 0-36 11t-24 29q-8 19-4.5 38.5T369-460l112 112Zm-65 216-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartW100Filled.displayName = 'AmauiIconMaterialSettingsHeartW100Filled';

export default IconMaterialSettingsHeartW100Filled;
