import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOffFilled'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V5.975h3.975L15 15h-2.85L1.375 4.225 2.8 2.8l18.4 18.4-1.425 1.425L15.15 18ZM8.85 6H22v11.875h-1.275Zm8.65 3q-.625 0-1.062.438Q16 9.875 16 10.5t.438 1.062Q16.875 12 17.5 12t1.062-.438Q19 11.125 19 10.5t-.438-1.062Q18.125 9 17.5 9ZM7 15h2v-2h2v-2H9V9H7v2H5v2h2Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOffFilled.displayName = 'AmauiIconMaterialVideogameAssetOffFilled';

export default IconMaterialVideogameAssetOffFilled;
