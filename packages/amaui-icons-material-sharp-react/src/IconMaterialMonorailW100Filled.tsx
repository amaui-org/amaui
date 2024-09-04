import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonorailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonorailW100Filled'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-271h28v111h182v28H285v-28h181v-111ZM332-828h296q49.5 0 84.75 35.25T748-708v363q0 44.25-30.75 74.62Q686.5-240 643-240h-69v-111H386v111h-69q-44.25 0-74.62-30.38Q212-300.75 212-345v-363q0-49.5 34.5-84.75T332-828Zm-92 136v160h480v-160H240Z"/>
    </Icon>
  );
});

IconMaterialMonorailW100Filled.displayName = 'AmauiIconMaterialMonorailW100Filled';

export default IconMaterialMonorailW100Filled;
