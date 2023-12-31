import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallArtW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallArtW100'

      short_name='WallArt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h234l114-114 114 114h234v536H132Zm28-28h640v-480H160v480Zm158-106h332L548-402 448-278l-64-74-66 86Zm352.235-174Q687-440 698.5-451.735q11.5-11.736 11.5-28.5Q710-497 698.265-508.5q-11.736-11.5-28.5-11.5Q653-520 641.5-508.265q-11.5 11.736-11.5 28.5Q630-463 641.735-451.5q11.736 11.5 28.5 11.5ZM406-668h148l-74-74-74 74ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialWallArtW100.displayName = 'AmauiIconMaterialWallArtW100';

export default IconMaterialWallArtW100;
