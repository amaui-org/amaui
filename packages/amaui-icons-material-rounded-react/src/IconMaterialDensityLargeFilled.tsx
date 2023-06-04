import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLargeFilled'

      short_name='DensityLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm0 16q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDensityLargeFilled.displayName = 'AmauiIconMaterialDensityLargeFilled';

export default IconMaterialDensityLargeFilled;
