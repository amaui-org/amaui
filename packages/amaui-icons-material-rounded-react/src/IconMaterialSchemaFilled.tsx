import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchemaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaFilled'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 23q-.625 0-1.062-.438Q4 22.125 4 21.5v-3q0-.625.438-1.062Q4.875 17 5.5 17h1v-2h-1q-.625 0-1.062-.438Q4 14.125 4 13.5v-3q0-.625.438-1.062Q4.875 9 5.5 9h1V7h-1q-.625 0-1.062-.438Q4 6.125 4 5.5v-3q0-.625.438-1.062Q4.875 1 5.5 1h4q.625 0 1.062.438Q11 1.875 11 2.5v3q0 .625-.438 1.062Q10.125 7 9.5 7h-1v2h1q.625 0 1.062.438Q11 9.875 11 10.5v.5h3v-.5q0-.625.438-1.062Q14.875 9 15.5 9h4q.625 0 1.062.438Q21 9.875 21 10.5v3q0 .625-.438 1.062Q20.125 15 19.5 15h-4q-.625 0-1.062-.438Q14 14.125 14 13.5V13h-3v.5q0 .625-.438 1.062Q10.125 15 9.5 15h-1v2h1q.625 0 1.062.438.438.437.438 1.062v3q0 .625-.438 1.062Q10.125 23 9.5 23Z"/>
    </Icon>
  );
});

IconMaterialSchemaFilled.displayName = 'AmauiIconMaterialSchemaFilled';

export default IconMaterialSchemaFilled;
