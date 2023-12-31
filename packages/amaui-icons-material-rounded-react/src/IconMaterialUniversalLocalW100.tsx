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
      <path d="M192-240h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-28v-480 480Zm320-240q-13 0-21.5-8.5T450-510q0-13 8.5-21.5T480-540q13 0 21.5 8.5T510-510q0 13-8.5 21.5T480-480Zm0-150q-48 0-84 33t-36 90q0 33 25.5 73.5T460-348q5 4 10 6t10 2q5 0 10-2t10-6q49-45 74.5-85.5T600-507q0-57-36-90t-84-33Z"/>
    </Icon>
  );
});

IconMaterialUniversalLocalW100.displayName = 'AmauiIconMaterialUniversalLocalW100';

export default IconMaterialUniversalLocalW100;
