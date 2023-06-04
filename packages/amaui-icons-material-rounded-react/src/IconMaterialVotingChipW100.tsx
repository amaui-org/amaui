import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVotingChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChipW100'

      short_name='VotingChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Zm0-.7h8q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7H8Q5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17Zm.65-2.4h.7v-2.25h2.25v-.7H9.35V9.4h-.7v2.25H6.4v.7h2.25Zm7.25 0h.7V9.4h-2.2v.7h1.5ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialVotingChipW100.displayName = 'AmauiIconMaterialVotingChipW100';

export default IconMaterialVotingChipW100;
