import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVacuumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumW100'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160.118-106Q121-106 93.5-133.382 66-160.765 66-199.882 66-239 93.382-266.5q27.383-27.5 66.5-27.5Q199-294 226.5-266.618q27.5 27.383 27.5 66.5Q254-161 226.618-133.5q-27.383 27.5-66.5 27.5ZM160-134q27 0 46.5-19.5T226-200q0-27-19.5-46.5T160-266q-27 0-46.5 19.5T94-200q0 27 19.5 46.5T160-134Zm147 28q5-8 8-14.5t6-13.5h105v-306q0-43.725-31.138-74.862Q363.725-546 320-546H134v174q-6 1-14 2.5t-14 3.5v-208h120v-162q0-66.12 45.921-112.06T383.933-894Q432-894 471.5-868q39.5 26 57.5 70l281 664h84v28H666v-28h114L504-786q-16-37-48-58.5T384.421-866Q330-866 292-828q-38 38-38 92v162h66q56 0 95 39t39 95v334H307Zm-27-234Z"/>
    </Icon>
  );
});

IconMaterialVacuumW100.displayName = 'AmauiIconMaterialVacuumW100';

export default IconMaterialVacuumW100;
