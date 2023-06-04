import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Filled'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-.425 0-.712-.288Q8 19.425 8 19v-3H5q-.425 0-.713-.288Q4 15.425 4 15t.287-.713Q4.575 14 5 14h3v-4H5q-.425 0-.713-.288Q4 9.425 4 9t.287-.713Q4.575 8 5 8h3V5q0-.425.288-.713Q8.575 4 9 4t.713.287Q10 4.575 10 5v3h4V5q0-.425.288-.713Q14.575 4 15 4t.713.287Q16 4.575 16 5v3h3q.425 0 .712.287Q20 8.575 20 9t-.288.712Q19.425 10 19 10h-3v4h3q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 16 19 16h-3v3q0 .425-.287.712Q15.425 20 15 20t-.712-.288Q14 19.425 14 19v-3h-4v3q0 .425-.287.712Q9.425 20 9 20Zm1-6h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3Filled.displayName = 'AmauiIconMaterialGrid3x3Filled';

export default IconMaterialGrid3x3Filled;
