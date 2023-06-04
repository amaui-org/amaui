import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatPortraitW100Filled'

      short_name='UnfloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m534 570 20-20-186-186h140v-28H320v188h28V383l186 187Zm74 354V704h140v220H608Zm-396 0V228h536v376H508v320H212Z"/>
    </Icon>
  );
});

IconMaterialUnfloatPortraitW100Filled.displayName = 'AmauiIconMaterialUnfloatPortraitW100Filled';

export default IconMaterialUnfloatPortraitW100Filled;
