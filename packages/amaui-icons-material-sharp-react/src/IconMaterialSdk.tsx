import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sdk'

      short_name='Sdk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm-16 520h560v-440H200v440Zm408-220-84 84 58 58 142-142-142-142-58 58 84 84Zm-254 0 84-84-58-58-142 142 142 142 58-58-84-84ZM200-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialSdk.displayName = 'AmauiIconMaterialSdk';

export default IconMaterialSdk;
