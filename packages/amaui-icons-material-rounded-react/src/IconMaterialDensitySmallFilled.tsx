import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensitySmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmallFilled'

      short_name='DensitySmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 4q-.425 0-.712-.288Q3 3.425 3 3t.288-.713Q3.575 2 4 2h16q.425 0 .712.287Q21 2.575 21 3t-.288.712Q20.425 4 20 4Zm0 18q-.425 0-.712-.288Q3 21.425 3 21t.288-.712Q3.575 20 4 20h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 22 20 22Zm0-6q-.425 0-.712-.288Q3 15.425 3 15t.288-.713Q3.575 14 4 14h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 16 20 16Zm0-6q-.425 0-.712-.288Q3 9.425 3 9t.288-.713Q3.575 8 4 8h16q.425 0 .712.287Q21 8.575 21 9t-.288.712Q20.425 10 20 10Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallFilled.displayName = 'AmauiIconMaterialDensitySmallFilled';

export default IconMaterialDensitySmallFilled;
