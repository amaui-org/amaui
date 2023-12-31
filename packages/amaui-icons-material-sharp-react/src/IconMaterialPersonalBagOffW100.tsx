import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagOffW100'

      short_name='PersonalBagOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.789-784Q512-784 534-762t22 54.137V-694q65 24 108.5 80T708-480v136l-28-28v-108q0-83-58.5-141.5T480-680q-29 0-50 6t-36 14l-20-20q5-3 14.5-7.5T404-694v-14q0-31.667 22.105-53.833Q448.211-784 479.789-784Zm.211 28q-20.4 0-34.2 13.8Q432-728.4 432-708v6q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20.4-13.8-34.2Q500.4-756 480-756ZM828-72 474-426H346v-28h100L312-588q-17 23-24.5 52t-7.5 56v320h400v-100l28 28v100H252v-348q0-36 10-68.5t30-59.5L132-768l20-20L848-92l-20 20ZM537-526Zm-63 100Zm6 52Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOffW100.displayName = 'AmauiIconMaterialPersonalBagOffW100';

export default IconMaterialPersonalBagOffW100;
