import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Recenter'

      short_name='Recenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-40v-167l-44 43-56-56 140-140 140 140-56 56-44-43v167h-80ZM220-340l-56-56 43-44H40v-80h167l-43-44 56-56 140 140-140 140Zm520 0L600-480l140-140 56 56-43 44h167v80H753l43 44-56 56Zm-260-80q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0-180L340-740l56-56 44 43v-167h80v167l44-43 56 56-140 140Z"/>
    </Icon>
  );
});

IconMaterialRecenter.displayName = 'AmauiIconMaterialRecenter';

export default IconMaterialRecenter;
