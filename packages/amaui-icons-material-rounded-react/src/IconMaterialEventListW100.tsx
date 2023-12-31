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
      <path d="M620-172q-11 0-19.5-8.5T592-200v-180q0-11 8.5-19.5T620-408h180q11 0 19.5 8.5T828-380v180q0 11-8.5 19.5T800-172H620Zm0-28h180v-180H620v180Zm-474-76q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T447.975-280q-4.025 4-9.975 4H146Zm474-276q-11 0-19.5-8.5T592-580v-180q0-11 8.5-19.5T620-788h180q11 0 19.5 8.5T828-760v180q0 11-8.5 19.5T800-552H620Zm0-28h180v-180H620v180Zm-474-76q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T447.975-660q-4.025 4-9.975 4H146Zm564 366Zm0-380Z"/>
    </Icon>
  );
});

IconMaterialEventListW100.displayName = 'AmauiIconMaterialEventListW100';

export default IconMaterialEventListW100;
