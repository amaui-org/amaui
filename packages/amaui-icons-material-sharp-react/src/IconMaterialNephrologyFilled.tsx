import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNephrologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NephrologyFilled'

      short_name='Nephrology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-4.175q-.25.1-.488.137Q8.275 17 8 17q-2.5 0-4.25-1.75T2 11V9q0-2.5 1.75-4.25T8 3q1.25 0 2.125.875T11 6q0 1.25-.875 2.125T8 9v2q1.25 0 2.125.875T11 14v7Zm4 0v-7q0-1.25.875-2.125T16 11V9q-1.25 0-2.125-.875T13 6q0-1.25.875-2.125T16 3q2.5 0 4.25 1.75T22 9v2q0 2.5-1.75 4.25T16 17q-.275 0-.512-.038-.238-.037-.488-.137V21Z"/>
    </Icon>
  );
});

IconMaterialNephrologyFilled.displayName = 'AmauiIconMaterialNephrologyFilled';

export default IconMaterialNephrologyFilled;
