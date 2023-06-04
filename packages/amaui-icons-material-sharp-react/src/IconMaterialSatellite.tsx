import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSatellite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Satellite'

      short_name='Satellite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12q2.5 0 4.25-1.75T12 6h-1.7q0 1.8-1.25 3.05Q7.8 10.3 6 10.3Zm0-3.4q1.075 0 1.812-.763Q8.55 7.075 8.55 6H6ZM6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialSatellite.displayName = 'AmauiIconMaterialSatellite';

export default IconMaterialSatellite;
