import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReleaseAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReleaseAlertW100'

      short_name='ReleaseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m366-126-64-108-122-26 12-126-82-94 82-94-12-126 122-26 64-108 114 48 114-48 64 108 122 26-12 126 82 94-82 94 12 126-122 26-64 108-114-48-114 48Zm12-36 102-42 102 42 58-96 110-24-10-114 74-84-74-84 10-114-110-24-58-96-102 42-102-42-58 96-110 24 10 114-74 84 74 84-10 114 110 24 58 96Zm102-318Zm0 172q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-14-124h28v-240h-28v240Z"/>
    </Icon>
  );
});

IconMaterialReleaseAlertW100.displayName = 'AmauiIconMaterialReleaseAlertW100';

export default IconMaterialReleaseAlertW100;
