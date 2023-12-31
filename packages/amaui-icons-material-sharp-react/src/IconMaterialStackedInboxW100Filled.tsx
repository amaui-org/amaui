import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedInboxW100Filled'

      short_name='StackedInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-274v-456h616v456H226Zm308-118q33 0 56.5-23.5T614-472h200v-230H254v230h200q0 33 23.5 56.5T534-392Zm134 226H118v-488h28v460h522v28Z"/>
    </Icon>
  );
});

IconMaterialStackedInboxW100Filled.displayName = 'AmauiIconMaterialStackedInboxW100Filled';

export default IconMaterialStackedInboxW100Filled;
