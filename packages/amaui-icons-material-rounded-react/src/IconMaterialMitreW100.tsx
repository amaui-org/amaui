import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMitreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MitreW100'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-436v-88q0-13 8.5-21.5T590-554h50v-172h-50q-13 0-21.5-8.5T560-756v-88q0-13 8.5-21.5T590-874h128q13 0 21.5 8.5T748-844v88q0 13-8.5 21.5T718-726h-50v172h50q13 0 21.5 8.5T748-524v88q0 13-8.5 21.5T718-406H590q-13 0-21.5-8.5T560-436Zm28 2h132v-92H588v92Zm0-320h132v-92H588v92ZM212-116v-88q0-13 8.5-21.5T242-234h50v-172h-50q-13 0-21.5-8.5T212-436v-88q0-13 8.5-21.5T242-554h50v-172h-50q-13 0-21.5-8.5T212-756v-88q0-13 8.5-21.5T242-874h128q13 0 21.5 8.5T400-844v88q0 13-8.5 21.5T370-726h-50v172h50q13 0 21.5 8.5T400-524v88q0 13-8.5 21.5T370-406h-50v172h50q13 0 21.5 8.5T400-204v88q0 13-8.5 21.5T370-86H242q-13 0-21.5-8.5T212-116Zm28 2h132v-92H240v92Zm0-320h132v-92H240v92Zm0-320h132v-92H240v92Zm414 274Zm0-320ZM306-160Zm0-320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialMitreW100.displayName = 'AmauiIconMaterialMitreW100';

export default IconMaterialMitreW100;
