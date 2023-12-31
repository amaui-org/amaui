import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdkFilled'

      short_name='Sdk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm392 300-84 84 58 58 142-142-142-142-58 58 84 84Zm-254 0 84-84-58-58-142 142 142 142 58-58-84-84Z"/>
    </Icon>
  );
});

IconMaterialSdkFilled.displayName = 'AmauiIconMaterialSdkFilled';

export default IconMaterialSdkFilled;
