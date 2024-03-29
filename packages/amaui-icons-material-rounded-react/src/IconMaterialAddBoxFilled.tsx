import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxFilled'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3q0 .425.288.712.287.288.712.288Zm-7 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAddBoxFilled.displayName = 'AmauiIconMaterialAddBoxFilled';

export default IconMaterialAddBoxFilled;
