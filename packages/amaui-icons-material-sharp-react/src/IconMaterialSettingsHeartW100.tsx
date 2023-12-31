import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeartW100'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m481-348 112-112q14-14 18-33.5t-4-37.5q-8-18-24-29.5T547-572q-20 0-36 12t-30 26q-14-14-29.5-26T416-572q-20 0-36 11t-24 29q-8 19-4.5 38.5T369-460l112 112Zm-65 216-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Zm24-28h78l15-109q30-8 53.5-21.5T636-329l100 43 40-68-88-66q5-18 6.5-32t1.5-28q0-15-1.5-28t-6.5-30l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 49 38t57 22l13 108Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartW100.displayName = 'AmauiIconMaterialSettingsHeartW100';

export default IconMaterialSettingsHeartW100;
