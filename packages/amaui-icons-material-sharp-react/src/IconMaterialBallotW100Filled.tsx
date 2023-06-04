import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100Filled'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10h4.5v-.7H12Zm0 4.7h4.5V14H12Zm-4-4.05h2v-2H8Zm0 4.7h2v-2H8ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialBallotW100Filled.displayName = 'AmauiIconMaterialBallotW100Filled';

export default IconMaterialBallotW100Filled;
