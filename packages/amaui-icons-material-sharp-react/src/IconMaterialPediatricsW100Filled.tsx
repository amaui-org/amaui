import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100Filled'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M326 406v-28h140V268h28v110h140v28H326Zm66 496q-24.75 0-42.375-17.625T332 842v-83h122v-28H332V617h122v-28H332v-53q0-37.5 26.25-63.75T422 446h116q37.5 0 63.75 26.25T628 536v306q0 24.75-17.625 42.375T568 902H392Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100Filled.displayName = 'AmauiIconMaterialPediatricsW100Filled';

export default IconMaterialPediatricsW100Filled;
