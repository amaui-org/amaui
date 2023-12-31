import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMitreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MitreW100Filled'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-436v-88q0-13 8.5-21.5T590-554h50v-172h-50q-13 0-21.5-8.5T560-756v-88q0-13 8.5-21.5T590-874h128q13 0 21.5 8.5T748-844v88q0 13-8.5 21.5T718-726h-50v172h50q13 0 21.5 8.5T748-524v88q0 13-8.5 21.5T718-406H590q-13 0-21.5-8.5T560-436ZM212-116v-88q0-13 8.5-21.5T242-234h50v-172h-50q-13 0-21.5-8.5T212-436v-88q0-13 8.5-21.5T242-554h50v-172h-50q-13 0-21.5-8.5T212-756v-88q0-13 8.5-21.5T242-874h128q13 0 21.5 8.5T400-844v88q0 13-8.5 21.5T370-726h-50v172h50q13 0 21.5 8.5T400-524v88q0 13-8.5 21.5T370-406h-50v172h50q13 0 21.5 8.5T400-204v88q0 13-8.5 21.5T370-86H242q-13 0-21.5-8.5T212-116Z"/>
    </Icon>
  );
});

IconMaterialMitreW100Filled.displayName = 'AmauiIconMaterialMitreW100Filled';

export default IconMaterialMitreW100Filled;
