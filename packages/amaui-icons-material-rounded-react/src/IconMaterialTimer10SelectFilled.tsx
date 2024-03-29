import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer10SelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectFilled'

      short_name='Timer10Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16h3V8h-3v8Zm0 3q-1.25 0-2.125-.875T7 16V8q0-1.25.875-2.125T10 5h3q1.25 0 2.125.875T16 8v8q0 1.25-.875 2.125T13 19Zm-5.5 0q-.625 0-1.062-.438Q3 18.125 3 17.5V8h-.5q-.625 0-1.062-.438Q1 7.125 1 6.5t.438-1.062Q1.875 5 2.5 5H4q.825 0 1.412.588Q6 6.175 6 7v10.5q0 .625-.438 1.062Q5.125 19 4.5 19ZM18 19q-.425 0-.712-.288Q17 18.425 17 18t.288-.712Q17.575 17 18 17h3v-1h-2.65q-.575 0-.962-.387Q17 15.225 17 14.65v-2.3q0-.575.388-.963.387-.387.962-.387H22q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13h-3v1h2.65q.575 0 .963.387.387.388.387.963v2.3q0 .575-.387.963-.388.387-.963.387Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectFilled.displayName = 'AmauiIconMaterialTimer10SelectFilled';

export default IconMaterialTimer10SelectFilled;
