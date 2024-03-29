import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOff'

      short_name='DomainVerificationOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M790 999 686 896H160q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256v114L54 264q-12-12-11.5-28.5T55 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790 999ZM160 816h446L206 416h-46v400Zm711 37-71-71V416H434L274 256h526q33 0 56.5 23.5T880 336v480q0 10-2 19.5t-7 17.5ZM607 589l-58-58 28-28q12-12 29-12t29 12q12 12 12 29t-12 29l-28 28Zm-57 57-84 84q-12 12-28 12t-28-12l-85-85q-12-12-12-29t12-29q12-12 29-12t29 12l55 55 54-54 58 58Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationOff.displayName = 'AmauiIconMaterialDomainVerificationOff';

export default IconMaterialDomainVerificationOff;
