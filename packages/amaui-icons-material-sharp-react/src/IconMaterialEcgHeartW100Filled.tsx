import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartW100Filled'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M655 264q72 0 122.5 56T828 456q0 20-3.5 40T813 536l-206 24-73-112h-27l-71 215-69-103-220-24q-8-19-11.5-39t-3.5-40q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5ZM479 900 205 624l-4-4-4-4 155-26 75 113h27l70-216 69 103 170 26-4 4-4 4-276 276Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartW100Filled.displayName = 'AmauiIconMaterialEcgHeartW100Filled';

export default IconMaterialEcgHeartW100Filled;
