import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakingNewsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNewsW100Filled'

      short_name='BreakingNews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-292h56v-56h-56v56Zm14-108h28v-254h-28v254Zm200 94h228v-28H466v28Zm0-160h228v-28H466v28Zm0-160h228v-28H466v28ZM132-172v-616h696v616H132Z"/>
    </Icon>
  );
});

IconMaterialBreakingNewsW100Filled.displayName = 'AmauiIconMaterialBreakingNewsW100Filled';

export default IconMaterialBreakingNewsW100Filled;
