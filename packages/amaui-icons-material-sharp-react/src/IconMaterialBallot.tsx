import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ballot'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10h5V8h-5Zm0 6h5v-2h-5Zm-5-5h4V7H7Zm0 6h4v-4H7Zm-4 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialBallot.displayName = 'AmauiIconMaterialBallot';

export default IconMaterialBallot;
