import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletCameraW100'

      short_name='TabletCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h776v536H746v-508H214v508H92Zm28-28h66v-480h-66v480Zm654 0h66v-480h-66v480ZM334-132v-227h81l33-33h64l32.57 33H626v227H334Zm146-57q23 0 40-17t17-40.14q0-23.14-17-39.5T480-302q-23 0-40 16.36t-17 39.5Q423-223 440-206t40 17ZM120-720h66-66Zm654 0h66-66Z"/>
    </Icon>
  );
});

IconMaterialTabletCameraW100.displayName = 'AmauiIconMaterialTabletCameraW100';

export default IconMaterialTabletCameraW100;
