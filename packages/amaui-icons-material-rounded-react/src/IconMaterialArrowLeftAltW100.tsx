import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftAltW100'

      short_name='ArrowLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m245-466 160 160q4 4 4.5 9.5T405-286q-5 5-10 5t-10-5L212-459q-9-9-9-21t9-21l173-173q4-4 9.5-4.5T405-674q5 5 5 10t-5 10L245-494h510q6 0 10 4t4 10q0 6-4 10t-10 4H245Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftAltW100.displayName = 'AmauiIconMaterialArrowLeftAltW100';

export default IconMaterialArrowLeftAltW100;
