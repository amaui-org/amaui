import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumW100'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q17.5 4 17.2 4H16v5.15q0 .225-.2.35-.2.125-.4 0l-1.25-.75-1.25.75q-.2.125-.4 0t-.2-.35V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25Zm1.95-2.65h6.7q.275 0 .375-.225.1-.225-.05-.425L14 14.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM12.3 4H16ZM6.8 4H6h12-.8Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100.displayName = 'AmauiIconMaterialPhotoAlbumW100';

export default IconMaterialPhotoAlbumW100;
