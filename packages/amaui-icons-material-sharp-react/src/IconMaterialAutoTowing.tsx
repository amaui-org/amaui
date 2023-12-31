import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTowing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTowing'

      short_name='AutoTowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-280v-160h328L120-636v116H40v-240h40l440 242v-282h200l200 240v280H820q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35t-35-85H40Zm200 60q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm460 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM600-560h216L682-720h-82v160Z"/>
    </Icon>
  );
});

IconMaterialAutoTowing.displayName = 'AmauiIconMaterialAutoTowing';

export default IconMaterialAutoTowing;
