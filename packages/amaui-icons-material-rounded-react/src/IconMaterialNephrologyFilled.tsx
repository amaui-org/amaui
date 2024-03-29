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
      <path d="M8 17q-2.5 0-4.25-1.75T2 11V9q0-2.5 1.75-4.25T8 3q1.25 0 2.125.875T11 6q0 1.25-.875 2.125T8 9v2q1.25 0 2.125.875T11 14v6q0 .425-.287.712Q10.425 21 10 21t-.712-.288Q9 20.425 9 20v-3.175q-.25.1-.488.137Q8.275 17 8 17Zm8 0q-.275 0-.512-.038-.238-.037-.488-.137V20q0 .2-.075.387-.075.188-.212.325-.138.138-.325.213Q14.2 21 14 21q-.425 0-.712-.288Q13 20.425 13 20v-6q0-1.25.875-2.125T16 11V9q-1.25 0-2.125-.875T13 6q0-1.25.875-2.125T16 3q2.5 0 4.25 1.75T22 9v2q0 2.5-1.75 4.25T16 17Z"/>
    </Icon>
  );
});

IconMaterialNephrologyFilled.displayName = 'AmauiIconMaterialNephrologyFilled';

export default IconMaterialNephrologyFilled;
