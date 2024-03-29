import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Toll'

      short_name='Toll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-3.35 0-5.675-2.325Q7 15.35 7 12q0-3.35 2.325-5.675Q11.65 4 15 4q3.35 0 5.675 2.325Q23 8.65 23 12q0 3.35-2.325 5.675Q18.35 20 15 20Zm-8-.25q-2.65-.7-4.325-2.85Q1 14.75 1 12q0-2.75 1.675-4.9Q4.35 4.95 7 4.25v2.1q-1.8.625-2.9 2.175Q3 10.075 3 12t1.1 3.475q1.1 1.55 2.9 2.175ZM15 12Zm0 6q2.5 0 4.25-1.75T21 12q0-2.5-1.75-4.25T15 6q-2.5 0-4.25 1.75T9 12q0 2.5 1.75 4.25T15 18Z"/>
    </Icon>
  );
});

IconMaterialToll.displayName = 'AmauiIconMaterialToll';

export default IconMaterialToll;
