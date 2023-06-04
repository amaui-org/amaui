import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTour = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tour'

      short_name='Tour'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><g><polygon opacity=".3" points="7,12 7,6 18.05,6 16.85,9 18.05,12"/><g><path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M7,12V6h11.05l-1.2,3l1.2,3H7z M14,9c0,1.1-0.9,2-2,2s-2-0.9-2-2 s0.9-2,2-2S14,7.9,14,9z"/></g></g></g>
    </Icon>
  );
});

IconMaterialTour.displayName = 'AmauiIconMaterialTour';

export default IconMaterialTour;
