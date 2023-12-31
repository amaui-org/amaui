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
      <path d="M764-83 642-203q8 8 13 19t5 24q0 25-17.5 42.5T600-100q-25 0-42.5-17.5T540-160q0-25 17.5-42.5T600-220q12 0 21.5 3.5T639-206l-69-70q-40 11-65 42.5T480-160q0 11 1.5 20.5T487-120H380v-346l-60-60v406h-40q-33 0-56.5-23.5T200-200v-400q0-10 2.5-19.5T210-638L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-27.5 11.5T764-83ZM600-474 394-680h126v-120h-40q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880h80q17 0 28.5 11.5T600-840v366Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveFilled.displayName = 'AmauiIconMaterialCarryOnBagInactiveFilled';

export default IconMaterialCarryOnBagInactiveFilled;
