import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeW100'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M516 750h228V562h-68v28h40v132H544V430h200v-28H516v348Zm-170 0h28V630h80v-28h-80V402h-28v200H214V402h-28v228h160v120ZM92 884V268h776v616H92Zm28-28h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeW100.displayName = 'AmauiIconMaterial4gMobiledataBadgeW100';

export default IconMaterial4gMobiledataBadgeW100;
