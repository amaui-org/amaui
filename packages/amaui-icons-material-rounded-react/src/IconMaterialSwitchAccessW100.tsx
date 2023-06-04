import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessW100'

      short_name='SwitchAccess'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 750v-28h28v28h-28Zm0-325v-25h28v25h-28Zm134 459v-28h28v28h-28Zm0-588v-28h28v28h-28Zm320 588v-28h28v28h-28Zm0-588v-28h28v28h-28Zm134 464v-28h28v28h-28Zm0-338v-25h28v25h-28ZM366 760q-26 0-43-17t-17-43V455q0-26 17-43t43-17h228q26 0 43 17t17 43v245q0 26-17 43t-43 17H366Zm0-28h228q14 0 23-9t9-23V455q0-14-9-23t-23-9H366q-14 0-23 9t-9 23v245q0 14 9 23t23 9Zm114-155Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessW100.displayName = 'AmauiIconMaterialSwitchAccessW100';

export default IconMaterialSwitchAccessW100;
