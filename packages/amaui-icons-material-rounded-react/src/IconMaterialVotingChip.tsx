import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVotingChip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChip'

      short_name='VotingChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5h8q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm0-2h8q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7H8Q5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17Zm.25-2h1.5v-2.25H12v-1.5H9.75V9h-1.5v2.25H6v1.5h2.25Zm7.25 0H17V9h-3v1.5h1.5ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialVotingChip.displayName = 'AmauiIconMaterialVotingChip';

export default IconMaterialVotingChip;
