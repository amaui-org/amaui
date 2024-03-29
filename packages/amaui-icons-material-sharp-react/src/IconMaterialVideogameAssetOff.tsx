import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOff'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.725 17.875 18.85 16H20V8h-9.15l-2-2H22v11.875ZM17.5 12q-.625 0-1.062-.438Q16 11.125 16 10.5t.438-1.062Q16.875 9 17.5 9t1.062.438Q19 9.875 19 10.5t-.438 1.062Q18.125 12 17.5 12Zm-8.35 0Zm5.7 0ZM7 15h2v-2h2v-2H9V9H7v2H5v2h2Zm-5 3V5.975h3.975L8 8H4v8h9.15L1.375 4.225 2.8 2.8l18.4 18.4-1.425 1.425L15.15 18Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOff.displayName = 'AmauiIconMaterialVideogameAssetOff';

export default IconMaterialVideogameAssetOff;
