import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIridescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIridescentW100'

      short_name='WbIridescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 13.8v-3.6h11.4v3.6Zm5.35-9V2.6h.7v2.2Zm6.55 2.55-.5-.5 1.4-1.4.5.5ZM11.65 21.3v-2.2h.7v2.2Zm7.45-2.75-1.4-1.4.5-.5 1.4 1.4ZM5.8 7.35l-1.4-1.4.5-.5 1.4 1.4Zm-.9 11.2-.5-.5 1.4-1.4.5.5ZM7 13.1h10v-2.2H7Zm0 0v-2.2 2.2Z"/>
    </Icon>
  );
});

IconMaterialWbIridescentW100.displayName = 'AmauiIconMaterialWbIridescentW100';

export default IconMaterialWbIridescentW100;
