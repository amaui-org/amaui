import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomChild = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChild'

      short_name='BedroomChild'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h1.5v-1.5h9V17H18v-6.35h-1.5V7h-9v3.65H6Zm3-6.5v-2h6v2ZM7.5 14v-2h9v2ZM2 22V2h20v20Zm2-2h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomChild.displayName = 'AmauiIconMaterialBedroomChild';

export default IconMaterialBedroomChild;
