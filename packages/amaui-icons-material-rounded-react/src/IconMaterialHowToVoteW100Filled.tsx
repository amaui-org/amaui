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
      <path d="M5.5 21q-.65 0-1.075-.425Q4 20.15 4 19.5v-2.8L6.45 14l.5.5L4.7 17h14.6l-2.25-2.5.5-.5L20 16.7v2.8q0 .65-.425 1.075Q19.15 21 18.5 21Zm5.475-7.225L8.15 10.9q-.45-.45-.437-1.063.012-.612.462-1.062L12.4 4.55q.45-.45 1.05-.45.6 0 1.05.45l2.85 2.85q.45.45.45 1.05 0 .6-.45 1.05l-4.275 4.275q-.45.45-1.05.45-.6 0-1.05-.45Zm5.85-4.75q.2-.2.2-.575 0-.375-.2-.575l-2.8-2.8q-.2-.2-.575-.2-.375 0-.575.2L8.65 9.3q-.2.2-.2.575 0 .375.2.575l2.8 2.8q.2.2.575.2.375 0 .575-.2Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteW100Filled.displayName = 'AmauiIconMaterialHowToVoteW100Filled';

export default IconMaterialHowToVoteW100Filled;
