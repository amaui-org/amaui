import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProblem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Problem'

      short_name='Problem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16q.425 0 .713-.288Q8 15.425 8 15t-.287-.713Q7.425 14 7 14t-.713.287Q6 14.575 6 15t.287.712Q6.575 16 7 16Zm-1-3h2V8H6Zm4 2h8v-2h-8Zm0-4h8V9h-8Zm-8 9V4h20v16Zm2-2h16V6H4Zm0 0V6Z"/>
    </Icon>
  );
});

IconMaterialProblem.displayName = 'AmauiIconMaterialProblem';

export default IconMaterialProblem;
