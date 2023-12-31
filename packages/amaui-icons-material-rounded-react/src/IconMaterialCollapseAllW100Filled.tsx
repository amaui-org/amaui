import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseAllW100Filled'

      short_name='CollapseAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300 306-126q-4 4-9.5 4.5T286-126q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-126q-5 5-10 5t-10-5L480-300Zm0-360 174-174q4-4 9.5-4.5T674-834q5 5 5 10t-5 10L501-641q-9 9-21 9t-21-9L286-814q-4-4-4.5-9.5T286-834q5-5 10-5t10 5l174 174Z"/>
    </Icon>
  );
});

IconMaterialCollapseAllW100Filled.displayName = 'AmauiIconMaterialCollapseAllW100Filled';

export default IconMaterialCollapseAllW100Filled;
