import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceEnvironmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceEnvironmentW100Filled'

      short_name='SourceEnvironment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-164v-650l174-118 174 118v142h376v508H118Zm28-28h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm0-160h132v-132H146v132Zm160 0h132v-132H306v132Zm0 480h508v-452H306v452Zm260-292v-28h128v28H566Zm0 160v-28h128v28H566ZM438-484v-28h28v28h-28Zm0 160v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialSourceEnvironmentW100Filled.displayName = 'AmauiIconMaterialSourceEnvironmentW100Filled';

export default IconMaterialSourceEnvironmentW100Filled;
