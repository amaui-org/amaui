import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifference = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Difference'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 11h2V9h2V7h-2V5h-2v2h-2v2h2Zm-2 4h6v-2h-6ZM6 19V1h9l6 6v12Zm2-2h11V8l-5-5H8Zm-6 6V7h2v14h11v2Zm6-6V3v14Z"/>
    </Icon>
  );
});

IconMaterialDifference.displayName = 'AmauiIconMaterialDifference';

export default IconMaterialDifference;
