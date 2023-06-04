import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToVoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteW100Filled'

      short_name='HowToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 17h14.6l-2.25-2.5.5-.5L20 16.7V21H4v-4.3L6.45 14l.5.5Zm7.325-2.175L7.1 9.85l6.35-6.35 4.95 4.95Zm0-1L17.4 8.45 13.45 4.5 8.075 9.875Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteW100Filled.displayName = 'AmauiIconMaterialHowToVoteW100Filled';

export default IconMaterialHowToVoteW100Filled;
