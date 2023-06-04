import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalFilled'

      short_name='PanoramaVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 22q.875-1.875 1.438-4.5.562-2.625.562-5.5t-.562-5.5Q4.375 3.875 3.5 2h17.025q-.875 1.875-1.45 4.5T18.5 12q0 2.875.575 5.5t1.45 4.5Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalFilled.displayName = 'AmauiIconMaterialPanoramaVerticalFilled';

export default IconMaterialPanoramaVerticalFilled;
