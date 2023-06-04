import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVotingChipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChipFilled'

      short_name='VotingChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5h8q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm.25-4h1.5v-2.25H12v-1.5H9.75V9h-1.5v2.25H6v1.5h2.25Zm7.25 0H17V9h-3v1.5h1.5Z"/>
    </Icon>
  );
});

IconMaterialVotingChipFilled.displayName = 'AmauiIconMaterialVotingChipFilled';

export default IconMaterialVotingChipFilled;
