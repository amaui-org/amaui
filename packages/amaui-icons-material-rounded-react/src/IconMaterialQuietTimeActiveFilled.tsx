import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveFilled'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 18.125 5.875 3.85Q6.7 3 7.662 2.375q.963-.625 2.013-1 .55-.2 1.013.137.462.338.437.913-.075 2.1.687 4.037.763 1.938 2.263 3.438 1.5 1.5 3.425 2.25 1.925.75 4.05.675.575-.025.938.387.362.413.187.913-.425 1.2-1.05 2.187-.625.988-1.475 1.813Zm-1.475 4.2-2-1.975q-.85.325-1.737.487Q14.05 21 13.1 21q-2.1 0-3.938-.8-1.837-.8-3.199-2.162-1.363-1.363-2.163-3.2Q3 13 3 10.9q0-.95.163-1.838.162-.887.487-1.737L1.675 5.35q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveFilled.displayName = 'AmauiIconMaterialQuietTimeActiveFilled';

export default IconMaterialQuietTimeActiveFilled;
