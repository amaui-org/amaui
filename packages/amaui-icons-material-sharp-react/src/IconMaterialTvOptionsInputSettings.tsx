import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOptionsInputSettings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOptionsInputSettings'

      short_name='TvOptionsInputSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80l12-60q12-5 22.5-10.5T576-364l58 18 40-68-46-40q2-13 2-26t-2-26l46-40-40-68-58 18q-11-8-21.5-13.5T532-620l-12-60h-80l-12 60q-12 5-22.5 10.5T384-596l-58-18-40 68 46 40q-2 13-2 26t2 26l-46 40 40 68 58-18q11 8 21.5 13.5T428-340l12 60Zm40-120q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTvOptionsInputSettings.displayName = 'AmauiIconMaterialTvOptionsInputSettings';

export default IconMaterialTvOptionsInputSettings;
