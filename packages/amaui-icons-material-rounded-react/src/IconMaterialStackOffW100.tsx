import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffW100'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-244-28-28v-256q0-13-9.5-22.5T768-560H512l-28-28h284q24.75 0 42.375 17.625T828-528v284ZM272-800l-28-28h284q24.75 0 42.375 17.625T588-768v66q0 5.95-4.035 9.975-4.035 4.025-10 4.025T564-692.025q-4-4.025-4-9.975v-66q0-13-9.5-22.5T528-800H272Zm384 384ZM432-160h328L400-520v328q0 14 9 23t23 9Zm0 28q-25.5 0-42.75-17.25T372-192v-356L160-760v328q0 14 9 23t23 9h66q5.95 0 9.975 4.035 4.025 4.035 4.025 10T267.975-376q-4.025 4-9.975 4h-66q-25.5 0-42.75-17.25T132-432v-356l-9.902-9.902Q118-802 117.5-807.5 117-813 122-818t10-5q5 0 10 5l676 676q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5l-10-10H432Zm148-208Z"/>
    </Icon>
  );
});

IconMaterialStackOffW100.displayName = 'AmauiIconMaterialStackOffW100';

export default IconMaterialStackOffW100;
