import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagInactiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveFilled'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 642-203q8 8 13 19t5 24q0 25-17.5 42.5T600-100q-25 0-42.5-17.5T540-160q0-25 17.5-42.5T600-220q12 0 21.5 3.5T639-206l-69-70q-40 11-65 42.5T480-160q0 11 1.5 20.5T487-120H380v-346l-60-60v406H200v-528L56-792l56-56 736 736-56 56ZM600-474 394-680h126v-120h-80v-80h160v406Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveFilled.displayName = 'AmauiIconMaterialCarryOnBagInactiveFilled';

export default IconMaterialCarryOnBagInactiveFilled;
