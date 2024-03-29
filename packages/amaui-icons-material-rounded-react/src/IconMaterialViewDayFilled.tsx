import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayFilled'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 20q-.425 0-.7-.288Q3 19.425 3 19t.288-.712Q3.575 18 4 18h16.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 20 20 20ZM5 16q-.825 0-1.413-.588Q3 14.825 3 14v-4q0-.825.587-1.413Q4.175 8 5 8h14q.825 0 1.413.587Q21 9.175 21 10v4q0 .825-.587 1.412Q19.825 16 19 16ZM3.975 6q-.425 0-.7-.287Q3 5.425 3 5t.288-.713Q3.575 4 4 4h16.025q.425 0 .7.287Q21 4.575 21 5t-.288.713Q20.425 6 20 6Z"/>
    </Icon>
  );
});

IconMaterialViewDayFilled.displayName = 'AmauiIconMaterialViewDayFilled';

export default IconMaterialViewDayFilled;
