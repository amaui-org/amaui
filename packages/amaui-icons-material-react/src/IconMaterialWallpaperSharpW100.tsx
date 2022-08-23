import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWallpaperSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperSharpW100'
      short_name='Wallpaper'

      {...props}
    >
      <path d="M15.25 9.75Q14.825 9.75 14.538 9.462Q14.25 9.175 14.25 8.75Q14.25 8.325 14.538 8.037Q14.825 7.75 15.25 7.75Q15.675 7.75 15.963 8.037Q16.25 8.325 16.25 8.75Q16.25 9.175 15.963 9.462Q15.675 9.75 15.25 9.75ZM4.3 11V4.3H11V5H5V11ZM4.3 19.7V13H5V19H11V19.7ZM19 11V5H13V4.3H19.7V11ZM13 19.7V19H19V13H19.7V19.7ZM7.95 16.35 9.6 14.2 11.2 16.05 13.7 12.95 16.25 16.35Z"/>
    </Icon>
  );
});

IconMaterialWallpaperSharpW100.displayName = 'AmauiIconMaterialWallpaperSharpW100';

export default IconMaterialWallpaperSharpW100;
