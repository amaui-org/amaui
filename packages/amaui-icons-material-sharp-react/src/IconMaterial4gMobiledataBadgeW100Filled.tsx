import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeW100Filled'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M516 750h228V562h-68v28h40v132H544V430h200v-28H516v348Zm-170 0h28V630h80v-28h-80V402h-28v200H214V402h-28v228h160v120ZM92 884V268h776v616H92Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterial4gMobiledataBadgeW100Filled';

export default IconMaterial4gMobiledataBadgeW100Filled;
