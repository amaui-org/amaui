import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideogameAssetSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetSharp'
      short_name='VideogameAsset'

      {...props}
    >
      <path d="M2 18V6H22V18ZM4 16H20V8H4ZM7 15H9V13H11V11H9V9H7V11H5V13H7ZM14.5 15Q15.125 15 15.562 14.562Q16 14.125 16 13.5Q16 12.875 15.562 12.438Q15.125 12 14.5 12Q13.875 12 13.438 12.438Q13 12.875 13 13.5Q13 14.125 13.438 14.562Q13.875 15 14.5 15ZM17.5 12Q18.125 12 18.562 11.562Q19 11.125 19 10.5Q19 9.875 18.562 9.438Q18.125 9 17.5 9Q16.875 9 16.438 9.438Q16 9.875 16 10.5Q16 11.125 16.438 11.562Q16.875 12 17.5 12ZM4 16V8V16Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetSharp.displayName = 'AmauiIconMaterialVideogameAssetSharp';

export default IconMaterialVideogameAssetSharp;
