import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWallpaperSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperSharp'
      short_name='Wallpaper'

      {...props}
    >
      <path d="M15.5 10Q14.85 10 14.425 9.575Q14 9.15 14 8.5Q14 7.85 14.425 7.425Q14.85 7 15.5 7Q16.15 7 16.575 7.425Q17 7.85 17 8.5Q17 9.15 16.575 9.575Q16.15 10 15.5 10ZM3 11V3H11V5H5V11ZM3 21V13H5V19H11V21ZM19 11V5H13V3H21V11ZM13 21V19H19V13H21V21ZM6 17 9 13 11.25 16 14.25 12 18 17Z"/>
    </Icon>
  );
});

IconMaterialWallpaperSharp.displayName = 'AmauiIconMaterialWallpaperSharp';

export default IconMaterialWallpaperSharp;
