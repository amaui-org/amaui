import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotFilled'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10h5V8h-5Zm0 6h5v-2h-5Zm-5-5h4V7H7Zm0 6h4v-4H7Zm-4 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialBallotFilled.displayName = 'AmauiIconMaterialBallotFilled';

export default IconMaterialBallotFilled;
