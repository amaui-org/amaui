import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentPatientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientW100'

      short_name='RecentPatient'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 824v-52q0-22 13.5-41.5T262 700q55-26 109.5-39T480 648q29 0 58 3.75T596 663v28q-29-8-58-11.5t-58-3.5q-52.626 0-104.313 12.5Q324 701 276 724q-17 9-26.5 21.5T240 772v24h356v28H212Zm28-28h356-356Zm240-252q-44.55 0-76.275-31.725Q372 480.55 372 436q0-44.55 31.725-76.275Q435.45 328 480 328q44.55 0 76.275 31.725Q588 391.45 588 436q0 44.55-31.725 76.275Q524.55 544 480 544Zm0-28q33 0 56.5-23.5T560 436q0-33-23.5-56.5T480 356q-33 0-56.5 23.5T400 436q0 33 23.5 56.5T480 516Zm0-80Zm266 522V820h-50V642h142l-71 140h68l-89 176Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100.displayName = 'AmauiIconMaterialRecentPatientW100';

export default IconMaterialRecentPatientW100;
