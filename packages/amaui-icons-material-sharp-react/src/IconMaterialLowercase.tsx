import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowercase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lowercase'

      short_name='Lowercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-240q-51 0-81-27.5T189-340q0-44 34.5-72.5T312-441q23 0 45 4t38 11v-12q0-29-20.5-47T320-503q-23 0-42 9.5T245-466l-47-35q24-29 54.5-43t68.5-14q69 0 103 32.5t34 97.5v178h-63v-37h-4q-14 23-38 35t-53 12Zm12-54q35 0 59.5-24t24.5-56q-14-8-33.5-12.5T324-391q-32 0-50 14t-18 37q0 20 16 33t40 13Zm388 54L540-400l56-56 64 64v-248h80v248l64-64 56 56-160 160Z"/>
    </Icon>
  );
});

IconMaterialLowercase.displayName = 'AmauiIconMaterialLowercase';

export default IconMaterialLowercase;
