import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVotingChipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChipW100Filled'

      short_name='VotingChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Zm.65-3.1h.7v-2.25h2.25v-.7H9.35V9.4h-.7v2.25H6.4v.7h2.25Zm7.25 0h.7V9.4h-2.2v.7h1.5Z"/>
    </Icon>
  );
});

IconMaterialVotingChipW100Filled.displayName = 'AmauiIconMaterialVotingChipW100Filled';

export default IconMaterialVotingChipW100Filled;
