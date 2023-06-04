import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhereToVoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhereToVoteW100Filled'

      short_name='WhereToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 12.375 15 8.325l-.5-.5-3.55 3.55-1.4-1.4-.5.5ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialWhereToVoteW100Filled.displayName = 'AmauiIconMaterialWhereToVoteW100Filled';

export default IconMaterialWhereToVoteW100Filled;
