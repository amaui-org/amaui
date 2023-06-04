import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeTypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeW100Filled'

      short_name='MergeType'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.6 19.1-4.95-4.95v-8.9L8.4 8.5 7.9 8 12 3.9 16.1 8l-.5.5-3.25-3.25v8.6l4.75 4.75Zm-9.2 0-.5-.5 3.2-3.2.5.5Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeW100Filled.displayName = 'AmauiIconMaterialMergeTypeW100Filled';

export default IconMaterialMergeTypeW100Filled;
