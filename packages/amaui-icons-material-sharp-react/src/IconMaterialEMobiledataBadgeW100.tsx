import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100'

      short_name='EMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M366 750h228v-28H394V590h160v-28H394V430h200v-28H366v348ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100.displayName = 'AmauiIconMaterialEMobiledataBadgeW100';

export default IconMaterialEMobiledataBadgeW100;
