import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumFilled'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm0 16q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm0-8q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumFilled.displayName = 'AmauiIconMaterialDensityMediumFilled';

export default IconMaterialDensityMediumFilled;
