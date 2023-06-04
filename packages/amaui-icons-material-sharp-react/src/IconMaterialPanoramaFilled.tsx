import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaFilled'

      short_name='Panorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16h12l-3.75-5-3 4L9 12Zm-4 4V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialPanoramaFilled.displayName = 'AmauiIconMaterialPanoramaFilled';

export default IconMaterialPanoramaFilled;
