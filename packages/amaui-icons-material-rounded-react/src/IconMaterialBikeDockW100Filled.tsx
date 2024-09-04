import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeDockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeDockW100Filled'

      short_name='BikeDock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-172q-5 0-9-4.12-4-4.11-4-9.5 0-5.38 3-9.88 3-4.5 8-5.5l186-32 30-498q1-24 18.17-40.5T458-788h43q23.66 0 40.83 16.5Q559-755 561-731l30 498 185 32q5 1 8.5 5.5t3.5 9.8q0 5.6-4.03 9.65Q779.95-172 774-172H185Zm245-59h100v-479q0-21.25-14.32-35.63Q501.35-760 480.18-760q-21.18 0-35.68 14.37Q430-731.25 430-710v479Z"/>
    </Icon>
  );
});

IconMaterialBikeDockW100Filled.displayName = 'AmauiIconMaterialBikeDockW100Filled';

export default IconMaterialBikeDockW100Filled;
