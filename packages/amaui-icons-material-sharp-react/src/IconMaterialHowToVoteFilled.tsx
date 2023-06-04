import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToVoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteFilled'

      short_name='HowToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.175 16h13.65l-1.95-2.2 1.425-1.425L21 15.45V22H3v-6.55l2.75-3.125 1.425 1.425Zm6.85-.175L5.7 9.45l7.75-7.75 6.375 6.325Zm.025-2.875L17 8l-3.55-3.5L8.5 9.45Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteFilled.displayName = 'AmauiIconMaterialHowToVoteFilled';

export default IconMaterialHowToVoteFilled;
