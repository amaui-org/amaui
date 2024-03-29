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
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20v-4.55l2.75-3.125 1.425 1.425-2 2.25h13.65l-1.95-2.2 1.425-1.425L21 15.45V20q0 .825-.587 1.413Q19.825 22 19 22Zm5.6-7.6-3.475-3.525Q6.55 10.3 6.55 9.45q0-.85.575-1.425l4.9-4.9q.575-.575 1.425-.575.85 0 1.425.575L18.4 6.6q.575.575.588 1.412.012.838-.563 1.413l-5 5q-.575.575-1.412.563-.838-.013-1.413-.588ZM17 8l-3.55-3.5L8.5 9.45l3.55 3.5Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteFilled.displayName = 'AmauiIconMaterialHowToVoteFilled';

export default IconMaterialHowToVoteFilled;
