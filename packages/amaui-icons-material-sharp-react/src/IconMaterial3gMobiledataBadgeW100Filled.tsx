import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadgeW100Filled'

      short_name='3gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M506 750h228V562h-94v28h66v132H534V430h200v-28H506v348Zm-280 0h188V590l-14-14 14-14V402H226v28h160v132H226v28h160v132H226v28ZM92 884V268h776v616H92Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterial3gMobiledataBadgeW100Filled';

export default IconMaterial3gMobiledataBadgeW100Filled;
