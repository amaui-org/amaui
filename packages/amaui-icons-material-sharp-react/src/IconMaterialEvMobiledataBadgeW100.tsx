import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeW100'

      short_name='EvMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M246 750h182v-28H274V590h114v-28H274V430h154v-28H246v348Zm354 0h32l110-348h-30l-96 304-96-304h-30l110 348ZM92 884V268h776v616H92Zm28-28h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeW100.displayName = 'AmauiIconMaterialEvMobiledataBadgeW100';

export default IconMaterialEvMobiledataBadgeW100;
