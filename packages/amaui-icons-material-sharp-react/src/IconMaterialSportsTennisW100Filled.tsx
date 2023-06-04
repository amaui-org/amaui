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
      <path d="m3.6 19.1-.5-.5 4.625-4.625q.725-.725.95-1.7Q8.9 11.3 8.9 9.3q0-1.3.575-2.55.575-1.25 1.625-2.3 1.875-1.875 4.075-2.175 2.2-.3 3.625 1.125 1.425 1.425 1.125 3.625-.3 2.2-2.175 4.075-1.05 1.05-2.287 1.6-1.238.55-2.563.55-1.925 0-2.925.238-1 .237-1.75.987Zm6.9-7.45q1.175 1.15 3.175.837 2-.312 3.575-1.887 1.6-1.6 1.913-3.588.312-1.987-.863-3.112-1.15-1.175-3.125-.863Q13.2 3.35 11.6 4.95 10.025 6.5 9.688 8.488q-.338 1.987.812 3.162Zm7.7 10.05q-1.125 0-1.912-.787Q15.5 20.125 15.5 19t.788-1.913q.787-.787 1.912-.787t1.913.787q.787.788.787 1.913t-.787 1.913q-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialSportsTennisW100Filled.displayName = 'AmauiIconMaterialSportsTennisW100Filled';

export default IconMaterialSportsTennisW100Filled;
