import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxFilled'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm424 80H320v255q0 23 19 34.5t39 1.5l102-51 102 51q20 10 39-1.5t19-34.5v-255Z"/>
    </Icon>
  );
});

IconMaterialBoxFilled.displayName = 'AmauiIconMaterialBoxFilled';

export default IconMaterialBoxFilled;
