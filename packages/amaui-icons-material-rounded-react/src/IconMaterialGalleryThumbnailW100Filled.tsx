import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100Filled'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 17.7q-.625 0-1.062-.438-.438-.437-.438-1.062V7.8q0-.625.438-1.062Q3.825 6.3 4.45 6.3h8.4q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438ZM17.1 11q-.325 0-.538-.213-.212-.212-.212-.537v-3.2q0-.325.212-.538.213-.212.538-.212h3.2q.325 0 .537.212.213.213.213.538v3.2q0 .325-.213.537-.212.213-.537.213ZM5.65 14.875h6q.225 0 .325-.2t-.025-.4L10.325 12.1q-.125-.15-.3-.15t-.3.15L8.15 14.2l-1.075-1.425q-.125-.15-.3-.15t-.3.15l-1.125 1.5q-.125.2-.012.4.112.2.312.2ZM17.1 17.7q-.325 0-.538-.213-.212-.212-.212-.537v-3.2q0-.325.212-.538.213-.212.538-.212h3.2q.325 0 .537.212.213.213.213.538v3.2q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100Filled.displayName = 'AmauiIconMaterialGalleryThumbnailW100Filled';

export default IconMaterialGalleryThumbnailW100Filled;
