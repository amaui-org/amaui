import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifferenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceW100'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.15 10.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm-2 4h4.7v-.7h-4.7ZM7.3 17.7V2.3h8.35l4.05 4.05V17.7ZM8 17h11V6.7L15.3 3H8Zm-4.7 4.7V8.3H4V21h9.7v.7ZM8 17V3v14Z"/>
    </Icon>
  );
});

IconMaterialDifferenceW100.displayName = 'AmauiIconMaterialDifferenceW100';

export default IconMaterialDifferenceW100;
