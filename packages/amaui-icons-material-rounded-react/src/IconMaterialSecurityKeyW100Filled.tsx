import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityKeyW100Filled'

      short_name='SecurityKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M422-92q-26 0-43-17t-17-43v-117h-10q-26 0-43-17t-17-43v-479q0-26 17-43t43-17h256q26 0 43 17t17 43v479q0 26-17 43t-43 17h-10v117q0 26-17 43t-43 17H422Zm58-393q35 0 59.5-24t24.5-59q0-35-24.5-60T480-653q-35 0-59.5 25T396-568q0 35 24.5 59t59.5 24Zm-66 365h133q10 0 17-7t7-17v-125H390v125q0 10 7 17t17 7Zm66-393q-23 0-39-16t-16-39q0-23 16-40t39-17q23 0 40 17t17 40q0 23-17 39t-40 16Z"/>
    </Icon>
  );
});

IconMaterialSecurityKeyW100Filled.displayName = 'AmauiIconMaterialSecurityKeyW100Filled';

export default IconMaterialSecurityKeyW100Filled;
