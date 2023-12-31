import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOffW100Filled'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m792-128 20-20-660-660-20 20 80 80v192q0 128 73 236t195 146q51-15 98-48.5t82-77.5l132 132ZM480-331q-62 0-105-43t-43-105q0-23 7-44t19-39l205 205q-18 12-39 19t-44 7Zm232-17q20-48 28-89t8-79v-208L480-824l-178 66 137 137q10-3 20-4.5t21-1.5q62 0 105 43t43 105q0 11-1.5 21t-4.5 20l90 90Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOffW100Filled.displayName = 'AmauiIconMaterialSafetyCheckOffW100Filled';

export default IconMaterialSafetyCheckOffW100Filled;
