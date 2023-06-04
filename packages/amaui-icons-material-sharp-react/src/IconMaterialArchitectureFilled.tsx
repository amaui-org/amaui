import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchitectureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureFilled'

      short_name='Architecture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.75 21-.25-2.2 2.85-7.85q.375.35.813.587.437.238.937.363l-2.75 7.55Zm10.5 0-1.6-1.55-2.75-7.55q.5-.125.938-.363.437-.237.812-.587l2.85 7.85ZM12 11q-1.25 0-2.125-.875T9 8q0-.975.562-1.738Q10.125 5.5 11 5.2V3h2v2.2q.875.3 1.438 1.062Q15 7.025 15 8q0 1.25-.875 2.125T12 11Zm0-2q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialArchitectureFilled.displayName = 'AmauiIconMaterialArchitectureFilled';

export default IconMaterialArchitectureFilled;
