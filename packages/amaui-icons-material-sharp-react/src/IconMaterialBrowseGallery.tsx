import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseGallery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGallery'

      short_name='BrowseGallery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.8 16.2 1.4-1.4-3.2-3.2V7H8v5.4Zm6.2 4.3v-2.2q1.85-.875 2.925-2.575Q22 14.025 22 12q0-2.025-1.075-3.725Q19.85 6.575 18 5.7V3.5q2.725.95 4.363 3.287Q24 9.125 24 12t-1.637 5.212Q20.725 19.55 18 20.5ZM9 21q-1.875 0-3.513-.712-1.637-.713-2.849-1.926-1.213-1.212-1.925-2.85Q0 13.875 0 12t.713-3.513q.712-1.637 1.925-2.85Q3.85 4.425 5.487 3.712 7.125 3 9 3t3.512.712q1.638.713 2.851 1.925 1.212 1.213 1.925 2.85Q18 10.125 18 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.851 1.926Q10.875 21 9 21Zm0-2q2.925 0 4.963-2.038Q16 14.925 16 12t-2.037-4.963Q11.925 5 9 5 6.075 5 4.037 7.037 2 9.075 2 12q0 2.925 2.037 4.962Q6.075 19 9 19Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialBrowseGallery.displayName = 'AmauiIconMaterialBrowseGallery';

export default IconMaterialBrowseGallery;
