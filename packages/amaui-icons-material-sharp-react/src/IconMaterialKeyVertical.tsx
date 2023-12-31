import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVertical'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-680q0-33 23.5-56.5T500-760q33 0 56.5 23.5T580-680q0 33-23.5 56.5T500-600q-33 0-56.5-23.5T420-680ZM500 0 320-180l60-80-60-80 60-85v-47q-54-32-87-86.5T260-680q0-100 70-170t170-70q100 0 170 70t70 170q0 67-33 121.5T620-472v352L500 0ZM340-680q0 56 34 98.5t86 56.5v125l-41 58 61 82-55 71 75 75 40-40v-371q52-14 86-56.5t34-98.5q0-66-47-113t-113-47q-66 0-113 47t-47 113Z"/>
    </Icon>
  );
});

IconMaterialKeyVertical.displayName = 'AmauiIconMaterialKeyVertical';

export default IconMaterialKeyVertical;
