import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseFilled'

      short_name='Mouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.9 0-4.95-2.05Q5 17.9 5 15v-4h14v4q0 2.9-2.05 4.95Q14.9 22 12 22ZM5 9q0-2.65 1.725-4.6Q8.45 2.45 11 2.075V9Zm8 0V2.075q2.55.375 4.275 2.325Q19 6.35 19 9Z"/>
    </Icon>
  );
});

IconMaterialMouseFilled.displayName = 'AmauiIconMaterialMouseFilled';

export default IconMaterialMouseFilled;
