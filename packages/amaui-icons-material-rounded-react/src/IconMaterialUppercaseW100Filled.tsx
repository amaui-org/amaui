import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUppercaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UppercaseW100Filled'

      short_name='Uppercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M687-262q-6 0-10-4t-4-10v-278l-80 80q-4 4-9.5 4.5T573-474q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T801-474q-5 5-10 5t-10-5l-80-80v278q0 6-4 10t-10 4ZM246-382l-38 110q-2 5-5.5 7.5T194-262q-8 0-12.5-6.5T180-283l134-369q2-5 6-7.5t9-2.5h11q5 0 9.06 2.48 4.06 2.49 6.08 7.46l136.82 368.1Q495-276 490-269q-5 7-13.22 7-5.13 0-9.24-3-4.12-3-6.17-8L423-382H246Zm11-28h156l-77-217h-2l-77 217Z"/>
    </Icon>
  );
});

IconMaterialUppercaseW100Filled.displayName = 'AmauiIconMaterialUppercaseW100Filled';

export default IconMaterialUppercaseW100Filled;
