import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicExchangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicExchangeW100Filled'

      short_name='MagicExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m438 618-80-35q-5-2-5-7t5-7l80-36 35-79q2-5 7-5t7 5l36 79 79 36q5 2 5 7t-5 7l-79 35-36 80q-2 5-7 5t-7-5l-35-80Zm42 346q-125 0-222.5-69T115 709v125q0 6-4 10t-10 4q-6 0-10-4t-4-10V690q0-13 8.5-21.5T117 660h144q6 0 10 4t4 10q0 6-4 10t-10 4H138q36 112 131 180t211 68q137 0 238-89t119-228q1-7 5-12t11-5q6 0 9.5 5.5T865 620q-8 73-41 135.5t-84.5 109q-51.5 46.5-118 73T480 964Zm0-748q-131 0-234.5 85.5T123 532q-1 7-5 12.5t-11 5.5q-7 0-10-5.5T95 531q10-77 44.5-140t86-108q51.5-45 117-70T480 188q122 0 222.5 69.5T845 447V318q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T843 492H699q-6 0-10-4t-4-10q0-6 4-10t10-4h123q-33-108-128.5-178T480 216Z"/>
    </Icon>
  );
});

IconMaterialMagicExchangeW100Filled.displayName = 'AmauiIconMaterialMagicExchangeW100Filled';

export default IconMaterialMagicExchangeW100Filled;
