import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventListW100Filled'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-172q-11 0-19.5-8.5T592-200v-180q0-11 8.5-19.5T620-408h180q11 0 19.5 8.5T828-380v180q0 11-8.5 19.5T800-172H620ZM146-276q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H146Zm474-276q-11 0-19.5-8.5T592-580v-180q0-11 8.5-19.5T620-788h180q11 0 19.5 8.5T828-760v180q0 11-8.5 19.5T800-552H620ZM146-656q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H146Z"/>
    </Icon>
  );
});

IconMaterialEventListW100Filled.displayName = 'AmauiIconMaterialEventListW100Filled';

export default IconMaterialEventListW100Filled;
