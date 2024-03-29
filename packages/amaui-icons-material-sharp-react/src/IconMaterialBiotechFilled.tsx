import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiotechFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechFilled'

      short_name='Biotech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-2h5v-2q-2.075 0-3.537-1.463Q5 14.075 5 12q0-1.525.812-2.725.813-1.2 1.913-1.725-.1.525.038 1.075.137.55.437 1-.575.375-.888.975Q7 11.2 7 12q0 1.25.875 2.125T10 15h8v2h-5v2h6v2Zm9-8.9-.3-.95-.95.35-.5-1.325q.5-.375.775-.95T13.3 8q0-1.175-.837-1.988-.838-.812-2.013-.812L10 3.95l.95-.35-.35-.9 1.9-.7.3.95.95-.35 2.75 7.5-.95.35.35.95Zm-3.5-2.3q-.75 0-1.275-.525Q8.7 8.75 8.7 8q0-.75.525-1.275Q9.75 6.2 10.5 6.2q.75 0 1.275.525Q12.3 7.25 12.3 8q0 .75-.525 1.275-.525.525-1.275.525Z"/>
    </Icon>
  );
});

IconMaterialBiotechFilled.displayName = 'AmauiIconMaterialBiotechFilled';

export default IconMaterialBiotechFilled;
