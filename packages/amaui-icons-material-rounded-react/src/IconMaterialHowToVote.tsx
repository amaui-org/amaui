import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVote'

      short_name='HowToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20v-4.55l2.75-3.125 1.425 1.425-2 2.25h13.65l-1.95-2.2 1.425-1.425L21 15.45V20q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14v-2H5v2Zm5.625-5.625L7.1 10.85q-.575-.575-.562-1.412.012-.838.587-1.413l4.9-4.9q.575-.575 1.425-.6.85-.025 1.425.55L18.4 6.6q.575.575.6 1.4.025.825-.55 1.4l-5 5q-.575.575-1.412.562-.838-.012-1.413-.587ZM17 8.025 13.475 4.5l-4.95 4.95 3.525 3.525ZM5 20v-2 2Z"/>
    </Icon>
  );
});

IconMaterialHowToVote.displayName = 'AmauiIconMaterialHowToVote';

export default IconMaterialHowToVote;
