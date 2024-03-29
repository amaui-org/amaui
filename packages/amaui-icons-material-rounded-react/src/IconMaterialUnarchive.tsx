import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnarchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unarchive'

      short_name='Unarchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V6.5q0-.35.125-.663.125-.312.325-.587l1.4-1.7q.2-.275.5-.413Q5.65 3 6 3h12q.35 0 .65.137.3.138.5.413l1.4 1.7q.2.275.325.587Q21 6.15 21 6.5V19q0 .825-.587 1.413Q19.825 21 19 21Zm.4-15h13.2l-.85-1H6.25ZM5 19h14V8H5v11Zm7-2q.425 0 .713-.288Q13 16.425 13 16v-3.2l.9.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.15-.15-.325-.213-.175-.062-.375-.062t-.375.062q-.175.063-.325.213l-2.6 2.6q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275l.9-.9V16q0 .425.288.712.287.288.712.288Zm-7 2V8v11Z"/>
    </Icon>
  );
});

IconMaterialUnarchive.displayName = 'AmauiIconMaterialUnarchive';

export default IconMaterialUnarchive;
