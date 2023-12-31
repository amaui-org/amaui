import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallpaperSlideshow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperSlideshow'

      short_name='WallpaperSlideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-640q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM360-400l108-140 62 80 92-120 138 180H360ZM80-80v-640h80v560h560v80H80Zm160-505v-295h280v80H320v215h-80Zm0 345v-265h80v185h200v80H240Zm360 0v-80h200v-185h80v265H600Zm200-345v-215H600v-80h280v295h-80Z"/>
    </Icon>
  );
});

IconMaterialWallpaperSlideshow.displayName = 'AmauiIconMaterialWallpaperSlideshow';

export default IconMaterialWallpaperSlideshow;
