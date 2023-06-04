import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOffW100'

      short_name='DomainVerificationOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M852 988 708 844H132V308h80v40L90 226l20-20 762 762-20 20ZM160 816h520L280 416H160v400Zm663-9-23-23V416H432L324 308h504v476q0 6-1.5 12t-3.5 11ZM587 571l-20-20 41-41 20 20-41 41Zm-56 56-93 93-106-106 20-20 86 86 73-73 20 20Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationOffW100.displayName = 'AmauiIconMaterialDomainVerificationOffW100';

export default IconMaterialDomainVerificationOffW100;
