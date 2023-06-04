import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupW100Filled'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M218 872q-26 0-43-17t-17-43V382q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm108-108q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm448-398v-78q0-12-10-22t-22-10H534v80q0 13 8.5 21.5T564 366h210Z"/>
    </Icon>
  );
});

IconMaterialTabGroupW100Filled.displayName = 'AmauiIconMaterialTabGroupW100Filled';

export default IconMaterialTabGroupW100Filled;
