import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanorama = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Panorama'

      short_name='Panorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16h12l-3.75-5-3 4L9 12Zm-4 4V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPanorama.displayName = 'AmauiIconMaterialPanorama';

export default IconMaterialPanorama;
