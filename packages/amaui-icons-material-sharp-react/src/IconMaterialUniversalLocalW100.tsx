import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalLocalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalLocalW100'

      short_name='UniversalLocal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h640v-480H160v480Zm-28 28v-536h696v536H132Zm28-28v-480 480Zm319.825-240Q467-480 458.5-488.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM480-330q60-51 90-95.5t30-81.5q0-57-36-90t-84-33q-48 0-84 33t-36 90q0 37 30 81.5t90 95.5Z"/>
    </Icon>
  );
});

IconMaterialUniversalLocalW100.displayName = 'AmauiIconMaterialUniversalLocalW100';

export default IconMaterialUniversalLocalW100;
