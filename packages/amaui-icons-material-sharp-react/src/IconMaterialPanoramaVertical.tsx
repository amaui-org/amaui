import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVertical'

      short_name='PanoramaVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 22q.875-1.875 1.438-4.5.562-2.625.562-5.5t-.562-5.5Q4.375 3.875 3.5 2h17.025q-.875 1.875-1.45 4.5T18.5 12q0 2.875.575 5.5t1.45 4.5Zm14.15-2q-.575-1.95-.862-3.962Q16.5 14.025 16.5 12q0-2.025.288-4.038.287-2.012.862-3.962H6.375q.575 1.95.85 3.962Q7.5 9.975 7.5 12q0 2.025-.275 4.038Q6.95 18.05 6.375 20ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVertical.displayName = 'AmauiIconMaterialPanoramaVertical';

export default IconMaterialPanoramaVertical;
