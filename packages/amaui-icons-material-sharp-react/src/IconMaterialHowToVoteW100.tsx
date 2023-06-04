import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToVoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteW100'

      short_name='HowToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 17h14.6l-3.1-3.525.5-.5L20 16.7V21H4v-4.3l3.35-3.775.5.5Zm7.325-2.175L7.1 9.85l6.35-6.35 4.95 4.95Zm0-1L17.4 8.45 13.45 4.5 8.075 9.875ZM4.7 20.3h14.6v-2.6H4.7Zm0 0v-2.6 2.6Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteW100.displayName = 'AmauiIconMaterialHowToVoteW100';

export default IconMaterialHowToVoteW100;
