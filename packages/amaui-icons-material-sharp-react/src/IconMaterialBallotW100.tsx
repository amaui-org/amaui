import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10h4.5v-.7H12Zm0 4.7h4.5V14H12Zm-4-4.05h2v-2H8Zm0 4.7h2v-2H8ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialBallotW100.displayName = 'AmauiIconMaterialBallotW100';

export default IconMaterialBallotW100;
