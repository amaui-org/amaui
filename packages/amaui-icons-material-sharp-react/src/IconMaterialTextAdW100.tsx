import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextAdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAdW100'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Zm78-98h484v-28H238v28Zm0-128h484v-28H238v28Zm0-128h336v-28H238v28Z"/>
    </Icon>
  );
});

IconMaterialTextAdW100.displayName = 'AmauiIconMaterialTextAdW100';

export default IconMaterialTextAdW100;
