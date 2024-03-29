import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallpaper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wallpaper'

      short_name='Wallpaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 10q-.65 0-1.075-.425Q14 9.15 14 8.5q0-.65.425-1.075Q14.85 7 15.5 7q.65 0 1.075.425Q17 7.85 17 8.5q0 .65-.425 1.075Q16.15 10 15.5 10ZM3 11V3h8v2H5v6Zm0 10v-8h2v6h6v2Zm16-10V5h-6V3h8v8Zm-6 10v-2h6v-6h2v8Zm-7-4 3-4 2.25 3 3-4L18 17Z"/>
    </Icon>
  );
});

IconMaterialWallpaper.displayName = 'AmauiIconMaterialWallpaper';

export default IconMaterialWallpaper;
