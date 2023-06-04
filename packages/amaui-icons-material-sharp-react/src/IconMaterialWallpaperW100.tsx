import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallpaperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperW100'

      short_name='Wallpaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 9.75q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288ZM4.3 11V4.3H11V5H5v6Zm0 8.7V13H5v6h6v.7ZM19 11V5h-6v-.7h6.7V11Zm-6 8.7V19h6v-6h.7v6.7Zm-5.05-3.35L9.6 14.2l1.6 1.85 2.5-3.1 2.55 3.4Z"/>
    </Icon>
  );
});

IconMaterialWallpaperW100.displayName = 'AmauiIconMaterialWallpaperW100';

export default IconMaterialWallpaperW100;
