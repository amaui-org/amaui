import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProblemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProblemW100Filled'

      short_name='Problem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.2q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm0-2.9q.15 0 .25-.1t.1-.25v-4.8q0-.15-.1-.25T7 7.8q-.15 0-.25.1t-.1.25v4.8q0 .15.1.25t.25.1Zm4 1.05h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-4h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialProblemW100Filled.displayName = 'AmauiIconMaterialProblemW100Filled';

export default IconMaterialProblemW100Filled;
