import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUppercaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UppercaseW100'

      short_name='Uppercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M676-262q-6 0-10-4t-4-10v-278l-80 80q-4 4-9.5 4.5T562-474q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T790-474q-5 5-10 5t-10-5l-80-80v278q0 6-4 10t-10 4ZM254-382l-38 110q-2 5-5.5 7.5T202-262q-8 0-12.5-6.5T188-283l134-369q2-5 6-7.5t9-2.5h11q5 0 9 2.5t6 7.5l136 369q3 8-2 14.5t-13 6.5q-5 0-9-3t-6-8l-38-109H254Zm11-28h156l-77-217h-2l-77 217Z"/>
    </Icon>
  );
});

IconMaterialUppercaseW100.displayName = 'AmauiIconMaterialUppercaseW100';

export default IconMaterialUppercaseW100;
