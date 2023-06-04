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
      <path d="M818 1028 686 896H80V256h80v114L26 236l57-57 792 792-57 57ZM160 816h446L206 416h-46v400Zm711 37-71-71V416H434L274 256h606v560q0 10-2 19.5t-7 17.5ZM607 589l-58-58 57-57 58 58-57 57Zm-57 57L438 758 296 616l58-58 84 84 54-54 58 58Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationOff.displayName = 'AmauiIconMaterialDomainVerificationOff';

export default IconMaterialDomainVerificationOff;
