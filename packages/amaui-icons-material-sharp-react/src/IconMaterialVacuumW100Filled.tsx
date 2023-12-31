import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVacuumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumW100Filled'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160.118-106Q121-106 93.5-133.382 66-160.765 66-199.882 66-239 93.382-266.5q27.383-27.5 66.5-27.5Q199-294 226.5-266.618q27.5 27.383 27.5 66.5Q254-161 226.618-133.5q-27.383 27.5-66.5 27.5ZM160-134q27 0 46.5-19.5T226-200q0-27-19.5-46.5T160-266q-27 0-46.5 19.5T94-200q0 27 19.5 46.5T160-134Zm147 28q13-21 20-45.074 7-24.075 7-48.926 0-72.21-50.895-123.105Q232.21-374 160-374q-14 0-27 2.5t-27 5.5v-208h120v-162q0-66.12 45.921-112.06T383.933-894Q432-894 471.5-868q39.5 26 57.5 70l281 664h84v28H666v-28h114L504-786q-16-36-48.424-58-32.423-22-71.576-22-53.75 0-91.875 38.125T254-736v162h66q56 0 95 39t39 95v334H307Z"/>
    </Icon>
  );
});

IconMaterialVacuumW100Filled.displayName = 'AmauiIconMaterialVacuumW100Filled';

export default IconMaterialVacuumW100Filled;
