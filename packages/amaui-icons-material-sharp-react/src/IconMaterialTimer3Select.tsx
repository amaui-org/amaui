import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer3Select = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3Select'

      short_name='Timer3Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-3h6v-2.5H4v-3h6V8H4V5h9v14Zm11 0v-2h4v-1h-4v-5h6v2h-4v1h4v5Z"/>
    </Icon>
  );
});

IconMaterialTimer3Select.displayName = 'AmauiIconMaterialTimer3Select';

export default IconMaterialTimer3Select;
