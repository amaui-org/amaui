import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer3SelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectFilled'

      short_name='Timer3Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 19q-.625 0-1.062-.438Q4 18.125 4 17.5t.438-1.062Q4.875 16 5.5 16H10v-2.5H5.5q-.625 0-1.062-.438Q4 12.625 4 12t.438-1.062Q4.875 10.5 5.5 10.5H10V8H5.5q-.625 0-1.062-.438Q4 7.125 4 6.5t.438-1.062Q4.875 5 5.5 5H10q1.25 0 2.125.875T13 8v1.9q0 .875-.613 1.487Q11.775 12 10.9 12q.875 0 1.487.613.613.612.613 1.487V16q0 1.25-.875 2.125T10 19ZM16 19q-.425 0-.712-.288Q15 18.425 15 18t.288-.712Q15.575 17 16 17h3v-1h-2.65q-.575 0-.963-.387Q15 15.225 15 14.65v-2.3q0-.575.387-.963.388-.387.963-.387H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13h-3v1h2.65q.575 0 .963.387.387.388.387.963v2.3q0 .575-.387.963-.388.387-.963.387Z"/>
    </Icon>
  );
});

IconMaterialTimer3SelectFilled.displayName = 'AmauiIconMaterialTimer3SelectFilled';

export default IconMaterialTimer3SelectFilled;
