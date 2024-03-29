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
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.75-2.725q.75-2.3.75-6.275 0-4-.75-6.288Q4 3.425 4 3q0-.425.287-.713Q4.575 2 5 2h14q.425 0 .712.287Q20 2.575 20 3t-.75 2.712Q18.5 8 18.5 12q0 3.975.75 6.275.75 2.3.75 2.725 0 .425-.288.712Q19.425 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalFilled.displayName = 'AmauiIconMaterialPanoramaVerticalFilled';

export default IconMaterialPanoramaVerticalFilled;
