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
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.75-2.725q.75-2.3.75-6.275 0-4-.75-6.288Q4 3.425 4 3q0-.425.287-.713Q4.575 2 5 2h14q.425 0 .712.287Q20 2.575 20 3t-.75 2.712Q18.5 8 18.5 12q0 3.975.75 6.275.75 2.3.75 2.725 0 .425-.288.712Q19.425 22 19 22Zm12.65-2q-.575-1.95-.862-3.962Q16.5 14.025 16.5 12q0-2.025.288-4.038.287-2.012.862-3.962H6.375q.575 1.95.85 3.962Q7.5 9.975 7.5 12q0 2.025-.275 4.038Q6.95 18.05 6.375 20ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVertical.displayName = 'AmauiIconMaterialPanoramaVertical';

export default IconMaterialPanoramaVertical;
