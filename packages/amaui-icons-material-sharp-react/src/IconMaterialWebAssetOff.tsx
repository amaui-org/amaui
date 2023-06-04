import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOff'

      short_name='WebAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18h11.15l-10-10H4Zm6.85-10-4-4H22v15.15l-2-2V8Zm9.6 15.3-3.3-3.3H2V4h2v2.85L.65 3.5l1.425-1.425 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOff.displayName = 'AmauiIconMaterialWebAssetOff';

export default IconMaterialWebAssetOff;
