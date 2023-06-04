import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoW100Filled'

      short_name='Eco'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 20.7q-1 0-1.962-.275-.963-.275-1.838-.825.6-2.225 1.8-4.162Q10.45 13.5 12.2 12q-2 1.225-3.475 3.025-1.475 1.8-1.975 4.075-.125-.1-.225-.187-.1-.088-.225-.213-.95-1-1.475-2.225Q4.3 15.25 4.3 13.95q0-1.45.563-2.762.562-1.313 1.587-2.338 1.7-1.7 4.325-2.213Q13.4 6.125 18.65 6.4q.35 5.05-.188 7.737-.537 2.688-2.262 4.413-1 1.05-2.287 1.6-1.288.55-2.663.55Z"/>
    </Icon>
  );
});

IconMaterialEcoW100Filled.displayName = 'AmauiIconMaterialEcoW100Filled';

export default IconMaterialEcoW100Filled;
