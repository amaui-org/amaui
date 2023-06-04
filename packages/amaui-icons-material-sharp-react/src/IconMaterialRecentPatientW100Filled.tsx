import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentPatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientW100Filled'

      short_name='RecentPatient'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 824v-52q0-22 13.5-41.5T262 700q55-26 109.5-39T480 648q29 0 58 3.75T596 663v161H212Zm268-280q-44.55 0-76.275-31.725Q372 480.55 372 436q0-44.55 31.725-76.275Q435.45 328 480 328q44.55 0 76.275 31.725Q588 391.45 588 436q0 44.55-31.725 76.275Q524.55 544 480 544Zm266 414V820h-50V642h142l-71 140h68l-89 176Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100Filled.displayName = 'AmauiIconMaterialRecentPatientW100Filled';

export default IconMaterialRecentPatientW100Filled;
