import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomParentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentFilled'

      short_name='BedroomParent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17h1.5v-1.5h11V17H19v-5l-.75-.65V7H13q-.275 0-.525.075T12 7.3q-.225-.15-.475-.225Q11.275 7 11 7H5.75v4.35L5 12Zm7.75-6.5v-2h4v2Zm-5.5 0v-2h4v2ZM6.5 14v-2h11v2ZM2 22V2h20v20Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentFilled.displayName = 'AmauiIconMaterialBedroomParentFilled';

export default IconMaterialBedroomParentFilled;
