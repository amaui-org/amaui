import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarFilled'

      short_name='TableBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 20 2-5h3v-4.025Q7.175 10.85 4.588 9.85 2 8.85 2 7.5q0-1.45 2.925-2.475Q7.85 4 12 4q4.175 0 7.087 1.025Q22 6.05 22 7.5q0 1.35-2.587 2.35-2.588 1-6.413 1.125V15h3l2 5h-2l-1.2-3H9.2L8 20Z"/>
    </Icon>
  );
});

IconMaterialTableBarFilled.displayName = 'AmauiIconMaterialTableBarFilled';

export default IconMaterialTableBarFilled;
