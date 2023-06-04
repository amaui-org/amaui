import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeW100'

      short_name='CallMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 19.1-.5-.5 4.75-4.75v-8.6L8.4 8.5 7.9 8 12 3.9 16.1 8l-.5.5-3.25-3.25v8.9Zm9.2 0-3.2-3.2.5-.5 3.2 3.2Z"/>
    </Icon>
  );
});

IconMaterialCallMergeW100.displayName = 'AmauiIconMaterialCallMergeW100';

export default IconMaterialCallMergeW100;
