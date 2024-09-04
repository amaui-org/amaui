import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIdCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IdCardW100Filled'

      short_name='IdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M568-468h152v-28H568v28Zm0-108h152v-28H568v28ZM240-356h248v-2q0-32-32.5-49T364-424q-59 0-91.5 17T240-358v2Zm124-140q23 0 38.5-15.5T418-550q0-23-15.5-38.5T364-604q-23 0-38.5 15.5T310-550q0 23 15.5 38.5T364-496ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialIdCardW100Filled.displayName = 'AmauiIconMaterialIdCardW100Filled';

export default IconMaterialIdCardW100Filled;
