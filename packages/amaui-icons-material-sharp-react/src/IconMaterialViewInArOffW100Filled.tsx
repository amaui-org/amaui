import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewInArOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOffW100Filled'

      short_name='ViewInArOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m852-68-64-64H680v-28h85v5L155-765h5v85h-28v-108l-42-42 20-20L872-88l-20 20Zm-24-176-28-28v-8h28v36ZM272-800l-28-28h36v28h-8ZM132-132v-148h28v120h120v28H132Zm668-548v-120H680v-28h148v148h-28Zm-66 342L563-509l143-81v-18l-14-8-150 86-176-176 114-66 254 147v287ZM480-182 226-329v-296l69-40 152 152-179-103-14 8v18l212 120v248l14 8 14-8v-244l175 175-189 109Z"/>
    </Icon>
  );
});

IconMaterialViewInArOffW100Filled.displayName = 'AmauiIconMaterialViewInArOffW100Filled';

export default IconMaterialViewInArOffW100Filled;
