import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlyoverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlyoverFilled'

      short_name='Flyover'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-131q-20 4-40 8.5T80-513v-83q99-24 198.5-34T480-640q102 0 201.5 10T880-596v83q-20-5-40-9l-40-8v130h-80v-144q-60-8-120-12t-120-4q-60 0-120 3.5T240-545v145h-80Zm179-315 21-125h240l21 125q-35-2-70.5-4t-70.5-2q-35 0-70.5 1.5T339-715Zm-99 595 58-351q35-4 71-6.5t71-4.5v122h80v-122q35 2 71 5t71 7l58 350H520v-160h-80v160H240Z"/>
    </Icon>
  );
});

IconMaterialFlyoverFilled.displayName = 'AmauiIconMaterialFlyoverFilled';

export default IconMaterialFlyoverFilled;
