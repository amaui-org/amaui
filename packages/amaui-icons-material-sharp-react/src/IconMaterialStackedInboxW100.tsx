import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedInboxW100'

      short_name='StackedInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-274v-456h616v456H226Zm28-170v142h560v-142H638q-11 39-40 59.5T534-364q-35 0-64-20.5T430-444H254Zm280 52q33 0 56.5-23.5T614-472h200v-230H254v230h200q0 33 23.5 56.5T534-392Zm134 226H118v-488h28v460h522v28ZM254-302h560-560Z"/>
    </Icon>
  );
});

IconMaterialStackedInboxW100.displayName = 'AmauiIconMaterialStackedInboxW100';

export default IconMaterialStackedInboxW100;
