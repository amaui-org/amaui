import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsTennisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsTennisW100Filled'

      short_name='SportsTennis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.25 14.475-4.4 4.4q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l4.375-4.375q.725-.725.95-1.7.225-.975.225-2.975 0-1.3.575-2.55.575-1.25 1.625-2.3Q13 2.575 15.2 2.275q2.2-.3 3.625 1.125 1.425 1.425 1.125 3.625-.3 2.2-2.175 4.075-1.05 1.05-2.287 1.6-1.238.55-2.563.55-1.925 0-2.925.238-1 .237-1.75.987Zm2.275-2.825q1.175 1.15 3.175.837 2-.312 3.575-1.887 1.6-1.6 1.913-3.588.312-1.987-.863-3.112-1.15-1.175-3.125-.863-1.975.313-3.575 1.913Q10.05 6.5 9.713 8.488q-.338 1.987.812 3.162Zm7.7 10.05q-1.125 0-1.913-.787-.787-.788-.787-1.913t.787-1.913q.788-.787 1.913-.787t1.913.787q.787.788.787 1.913t-.787 1.913q-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialSportsTennisW100Filled.displayName = 'AmauiIconMaterialSportsTennisW100Filled';

export default IconMaterialSportsTennisW100Filled;
