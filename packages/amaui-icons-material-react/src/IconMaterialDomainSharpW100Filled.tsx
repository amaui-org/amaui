import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainSharpW100Filled'
      short_name='Domain'

      {...props}
    >
      <path d="M2.95 19.9V3.2H11.65V7.2H21.05V19.9ZM3.65 19.2H6.95V15.9H3.65ZM3.65 15.2H6.95V11.9H3.65ZM3.65 11.2H6.95V7.9H3.65ZM3.65 7.2H6.95V3.9H3.65ZM7.65 19.2H10.95V15.9H7.65ZM7.65 15.2H10.95V11.9H7.65ZM7.65 11.2H10.95V7.9H7.65ZM7.65 7.2H10.95V3.9H7.65ZM11.65 19.2H20.35V7.9H11.65V11.2H14.15V11.9H11.65V15.2H14.15V15.9H11.65ZM16.65 11.9V11.2H17.35V11.9ZM16.65 15.9V15.2H17.35V15.9Z"/>
    </Icon>
  );
});

IconMaterialDomainSharpW100Filled.displayName = 'AmauiIconMaterialDomainSharpW100Filled';

export default IconMaterialDomainSharpW100Filled;
