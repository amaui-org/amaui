import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856V296v560Zm-28 28V268h616v366q-6.65-1-13.65-1.5T760 632V296H200v560h336q0 7.35.5 14.35T538 884H172Zm588 95-19-19 88-90H626v-28h203l-88-90 19-19 123 123-123 123ZM466 750h28V590h160v-28H494V402h-28v160H306v28h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100.displayName = 'AmauiIconMaterialTabNewRightW100';

export default IconMaterialTabNewRightW100;
