import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamMagnetMountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamMagnetMountFilled'

      short_name='NestCamMagnetMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23 16.3q-.825 0-1.413-.587Q21 15.125 21 14.3v-4q0-.85.587-1.425Q22.175 8.3 23 8.3h1v8ZM7.25 18.275q-.375 0-.75-.15t-.65-.425L1.6 13.475q-.3-.3-.45-.663Q1 12.45 1 12.05q0-.375.15-.75t.425-.65l2.875-2.9q.725-.725 1.638-1.1Q7 6.275 8 6.275q2.1 0 3.55 1.45Q13 9.175 13 11.275q0 1-.375 1.913-.375.912-1.1 1.637l-2.85 2.85q-.3.3-.663.45-.362.15-.762.15Zm9.7-2.925L15.9 14.3l1.2-1.2H14v-1.5h3.2l-1.25-1.25L17 9.3l3 3Z"/>
    </Icon>
  );
});

IconMaterialNestCamMagnetMountFilled.displayName = 'AmauiIconMaterialNestCamMagnetMountFilled';

export default IconMaterialNestCamMagnetMountFilled;
