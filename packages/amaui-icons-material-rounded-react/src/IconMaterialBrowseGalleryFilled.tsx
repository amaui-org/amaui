import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseGalleryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGalleryFilled'

      short_name='BrowseGallery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.1 15.5q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L10 11.6V8q0-.425-.287-.713Q9.425 7 9 7t-.712.287Q8 7.575 8 8v3.575q0 .4.15.762.15.363.425.638Zm6.9 3.425q0-.3.138-.538.137-.237.462-.412 1.55-.875 2.475-2.463Q22 13.925 22 12q0-1.875-.913-3.45-.912-1.575-2.487-2.525-.25-.15-.425-.4T18 5q0-.65.562-.85.563-.2 1.088.125 2.025 1.2 3.187 3.25Q24 9.575 24 12t-1.15 4.45q-1.15 2.025-3.15 3.25-.575.35-1.138.125-.562-.225-.562-.9ZM9 21q-1.875 0-3.513-.712-1.637-.713-2.849-1.926-1.213-1.212-1.925-2.85Q0 13.875 0 12t.713-3.513q.712-1.637 1.925-2.85Q3.85 4.425 5.487 3.712 7.125 3 9 3t3.512.712q1.638.713 2.851 1.925 1.212 1.213 1.925 2.85Q18 10.125 18 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.851 1.926Q10.875 21 9 21Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryFilled.displayName = 'AmauiIconMaterialBrowseGalleryFilled';

export default IconMaterialBrowseGalleryFilled;
