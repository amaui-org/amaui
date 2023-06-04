import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaW100'

      short_name='Panorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaW100.displayName = 'AmauiIconMaterialPanoramaW100';

export default IconMaterialPanoramaW100;
