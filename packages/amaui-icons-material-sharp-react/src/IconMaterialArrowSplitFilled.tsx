import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSplitFilled'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160v-80h104L536-366l58-58 126 128v-104h80v240H560ZM160-440v-80h304l200-200H560v-80h240v240h-80v-104L496-440H160Z"/>
    </Icon>
  );
});

IconMaterialArrowSplitFilled.displayName = 'AmauiIconMaterialArrowSplitFilled';

export default IconMaterialArrowSplitFilled;
