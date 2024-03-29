import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariables = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Variables'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 14h-2q-.425 0-.712-.288Q16 13.425 16 13t.288-.713Q16.575 12 17 12h2v-2q0-.425.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 14 23 14h-2v2q0 .425-.288.712Q20.425 17 20 17t-.712-.288Q19 16.425 19 16Zm-5 0H4q-.425 0-.712-.288Q3 13.425 3 13V5q0-.425.288-.713Q3.575 4 4 4h16q.425 0 .712.287Q21 4.575 21 5v2h-2V6H5v6h9Zm-9-4V6v6-2Z"/>
    </Icon>
  );
});

IconMaterialVariables.displayName = 'AmauiIconMaterialVariables';

export default IconMaterialVariables;
