import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDay'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 20q-.425 0-.7-.288Q3 19.425 3 19t.288-.712Q3.575 18 4 18h16.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 20 20 20Zm0-14q-.425 0-.7-.287Q3 5.425 3 5t.288-.713Q3.575 4 4 4h16.025q.425 0 .7.287Q21 4.575 21 5t-.288.713Q20.425 6 20 6ZM5 16q-.825 0-1.413-.588Q3 14.825 3 14v-4q0-.825.587-1.413Q4.175 8 5 8h14q.825 0 1.413.587Q21 9.175 21 10v4q0 .825-.587 1.412Q19.825 16 19 16Zm0-2h14v-4H5v4Zm0-4v4-4Z"/>
    </Icon>
  );
});

IconMaterialViewDay.displayName = 'AmauiIconMaterialViewDay';

export default IconMaterialViewDay;
