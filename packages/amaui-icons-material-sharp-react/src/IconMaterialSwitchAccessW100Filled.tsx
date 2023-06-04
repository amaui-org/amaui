import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessW100Filled'

      short_name='SwitchAccess'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 750v-28h28v28h-28Zm0-325v-25h28v25h-28Zm134 459v-28h28v28h-28Zm0-588v-28h28v28h-28Zm320 588v-28h28v28h-28Zm0-588v-28h28v28h-28Zm134 464v-28h28v28h-28Zm0-338v-25h28v25h-28ZM306 760V395h348v365H306Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessW100Filled.displayName = 'AmauiIconMaterialSwitchAccessW100Filled';

export default IconMaterialSwitchAccessW100Filled;
