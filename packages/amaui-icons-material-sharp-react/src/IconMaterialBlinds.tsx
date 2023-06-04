import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlinds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blinds'

      short_name='Blinds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-2h2V4h16v14h2v2ZM6 9h12V6H6Zm0 9h12v-7h-5v2.275q.45.275.725.725.275.45.275 1 0 .825-.587 1.413Q12.825 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15q0-.55.275-1 .275-.45.725-.725V11H6ZM6 6h12H6Z"/>
    </Icon>
  );
});

IconMaterialBlinds.displayName = 'AmauiIconMaterialBlinds';

export default IconMaterialBlinds;
