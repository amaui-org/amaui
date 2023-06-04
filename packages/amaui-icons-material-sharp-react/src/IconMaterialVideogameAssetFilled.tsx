import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetFilled'

      short_name='VideogameAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6h20v12Zm5-3h2v-2h2v-2H9V9H7v2H5v2h2Zm7.5 0q.625 0 1.062-.438Q16 14.125 16 13.5t-.438-1.062Q15.125 12 14.5 12t-1.062.438Q13 12.875 13 13.5t.438 1.062Q13.875 15 14.5 15Zm3-3q.625 0 1.062-.438Q19 11.125 19 10.5t-.438-1.062Q18.125 9 17.5 9t-1.062.438Q16 9.875 16 10.5t.438 1.062Q16.875 12 17.5 12Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetFilled.displayName = 'AmauiIconMaterialVideogameAssetFilled';

export default IconMaterialVideogameAssetFilled;
