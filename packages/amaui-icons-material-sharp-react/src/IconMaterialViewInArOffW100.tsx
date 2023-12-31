import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewInArOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOffW100'

      short_name='ViewInArOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M553-519Zm-71 41Zm252-147v287L366-706l114-66 254 147ZM226-329.362V-625l69-40 187 187 187 187-189 109-254-147.362ZM542-530Zm-76 60Zm97-39Zm-69 43ZM387-685l155 155 150-86-212-122-93 53Zm79 463v-248L254-590v244l212 124Zm240-144v-224l-143 81 143 143ZM494-222l154-90-154-154v244ZM852-68l-64-64H680v-28h85v5L155-765h5v85h-28v-108l-42-42 20-20L872-88l-20 20Zm-24-212v36l-28-28v-8h28ZM280-828v28h-8l-28-28h36Zm0 696H132v-148h28v120h120v28Zm520-548v-120H680v-28h148v148h-28Z"/>
    </Icon>
  );
});

IconMaterialViewInArOffW100.displayName = 'AmauiIconMaterialViewInArOffW100';

export default IconMaterialViewInArOffW100;
