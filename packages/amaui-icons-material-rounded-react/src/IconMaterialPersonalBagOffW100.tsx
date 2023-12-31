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
      <path d="M480-784q32 0 54 22t22 54v14q65 24 108.5 80T708-480v136l-28-28v-108q0-83-58.5-141.5T480-680q-29 0-50 6t-36 14l-20-20q5-3 14.5-7.5T404-694v-14q0-32 22-54t54-22Zm0 28q-20 0-34 14t-14 34v6q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14ZM818-82 474-426H360q-6 0-10-4t-4-10q0-6 4-10t10-4h86L312-588q-17 23-24.5 52t-7.5 56v288q0 12 10 22t22 10h336q12 0 22-10t10-22v-68l28 28v40q0 26-17 43t-43 17H312q-26 0-43-17t-17-43v-288q0-36 10-68.5t30-59.5L142-758q-4-4-4.5-9.5T142-778q5-5 10-5t10 5l676 676q4 4 4.5 9.5T838-82q-5 5-10 5t-10-5ZM537-526Zm-63 100Zm6 52Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOffW100.displayName = 'AmauiIconMaterialPersonalBagOffW100';

export default IconMaterialPersonalBagOffW100;
