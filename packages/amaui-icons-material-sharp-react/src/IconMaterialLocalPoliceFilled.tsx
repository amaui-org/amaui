import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPoliceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceFilled'

      short_name='LocalPolice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.2 15.6 2.8-2.1 2.75 2.1-1.05-3.4 2.8-2.2h-3.4L12 6.6 10.9 10H7.5l2.75 2.2ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceFilled.displayName = 'AmauiIconMaterialLocalPoliceFilled';

export default IconMaterialLocalPoliceFilled;
