import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOff'

      short_name='PhonelinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.85 6-2-2H20q.425 0 .712.287Q21 4.575 21 5t-.288.713Q20.425 6 20 6ZM22 19.15l-2-2V10h-4v3.15l-2-2V9q0-.425.288-.713Q14.575 8 15 8h6q.425 0 .712.287Q22 8.575 22 9Zm-4.85.85H15q-.425 0-.712-.288Q14 19.425 14 19v-2.2l-8-8V17h4.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q11.125 20 10.5 20h-7q-.625 0-1.062-.438Q2 19.125 2 18.5t.438-1.062Q2.875 17 3.5 17H4V6.8L2.1 4.9q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375Q1.95 3.65 2.1 3.5q.275-.275.7-.275.425 0 .7.275l17 17q.15.15.225.325.075.175.075.363 0 .187-.075.374-.075.188-.225.338-.275.275-.688.288-.412.012-.712-.263Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOff.displayName = 'AmauiIconMaterialPhonelinkOff';

export default IconMaterialPhonelinkOff;
