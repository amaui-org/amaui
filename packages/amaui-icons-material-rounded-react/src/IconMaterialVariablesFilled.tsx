import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesFilled'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 17q-.425 0-.712-.288Q19 16.425 19 16v-2h-2q-.425 0-.712-.288Q16 13.425 16 13t.288-.713Q16.575 12 17 12h2v-2q0-.425.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 14 23 14h-2v2q0 .425-.288.712Q20.425 17 20 17ZM4 14q-.425 0-.712-.288Q3 13.425 3 13V5q0-.425.288-.713Q3.575 4 4 4h16q.425 0 .712.287Q21 4.575 21 5v2h-2q-.825 0-1.413.587Q17 8.175 17 9v1h-1q-.825 0-1.412.587Q14 11.175 14 12v2Z"/>
    </Icon>
  );
});

IconMaterialVariablesFilled.displayName = 'AmauiIconMaterialVariablesFilled';

export default IconMaterialVariablesFilled;
