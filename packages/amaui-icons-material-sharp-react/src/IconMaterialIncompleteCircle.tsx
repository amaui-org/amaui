import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIncompleteCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircle'

      short_name='IncompleteCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-2.1.775-3.913Q3.55 6.275 4.9 4.9L12 12V2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialIncompleteCircle.displayName = 'AmauiIconMaterialIncompleteCircle';

export default IconMaterialIncompleteCircle;
