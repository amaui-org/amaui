import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventListW100'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592-172v-236h236v236H592Zm28-28h180v-180H620v180Zm-488-76v-28h320v28H132Zm460-276v-236h236v236H592Zm28-28h180v-180H620v180Zm-488-76v-28h320v28H132Zm578 366Zm0-380Z"/>
    </Icon>
  );
});

IconMaterialEventListW100.displayName = 'AmauiIconMaterialEventListW100';

export default IconMaterialEventListW100;
