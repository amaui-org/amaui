import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismW100Filled'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.55 11.8q-2.225-1.8-3.662-3.462Q10.45 6.675 10.45 5.35q0-1.025.713-1.738.712-.712 1.737-.712.675 0 1.363.387.687.388 1.287 1.213.6-.825 1.288-1.213.687-.387 1.362-.387 1.025 0 1.738.712.712.713.712 1.738 0 1.325-1.437 2.988Q17.775 10 15.55 11.8Zm-13.2 8.3v-7.3h2.7v7.3Zm11.2 1.05-7.8-2.3V12.8h2.5l7.15 2.625V16.9h-2.7l-2.85-1-.3.7 3.1 1h7.6v1.45Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismW100Filled.displayName = 'AmauiIconMaterialVolunteerActivismW100Filled';

export default IconMaterialVolunteerActivismW100Filled;
