import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotTub = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotTub'

      short_name='HotTub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 8q-.825 0-1.412-.588Q5 6.825 5 6t.588-1.412Q6.175 4 7 4t1.412.588Q9 5.175 9 6t-.588 1.412Q7.825 8 7 8ZM2 22V12h3v-.75q0-.95.65-1.6Q6.3 9 7.25 9q.5 0 .925.2.425.2.775.55l1.4 1.55q.15.2.363.375.212.175.437.325H22v10Zm16-12 .1-.6q.125-.6-.062-1.175-.188-.575-.688-1.075-.8-.8-1.112-1.738-.313-.937-.188-1.962L16.1 3H18l-.1.6q-.1.6.05 1.15.15.55.65 1.05.8.8 1.138 1.762.337.963.212 1.988l-.05.45Zm-4 0 .1-.6q.125-.6-.062-1.175-.188-.575-.688-1.075-.8-.8-1.112-1.738-.313-.937-.188-1.962L12.1 3H14l-.1.6q-.125.6.038 1.15.162.55.662 1.05.8.8 1.138 1.762.337.963.212 1.988l-.05.45Zm3 10h2v-6h-2Zm-4 0h2v-6h-2Zm-4 0h2v-6H9Zm-4 0h2v-6H5Z"/>
    </Icon>
  );
});

IconMaterialHotTub.displayName = 'AmauiIconMaterialHotTub';

export default IconMaterialHotTub;
