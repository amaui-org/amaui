import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneralDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDeviceW100'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M389.764-292Q377-292 368.5-300.625T360-322v-406q0-24.75 17.647-42.375Q395.293-788 420.073-788H540.22q24.78 0 42.28 17.625T600-728v406q0 12.75-8.635 21.375Q582.731-292 569.966-292H389.764ZM388-320h184v-408q0-14-9-23t-23-9H420q-14 0-23 9t-9 23v408Zm-14 88h212q5.95 0 9.975 4.035 4.025 4.035 4.025 10T595.975-208q-4.025 4-9.975 4H374q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm14-88h184-184Z"/>
    </Icon>
  );
});

IconMaterialGeneralDeviceW100.displayName = 'AmauiIconMaterialGeneralDeviceW100';

export default IconMaterialGeneralDeviceW100;
