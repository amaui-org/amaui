import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.875 15.5q0-.675.413-1.338.412-.662 1.225-1.187.812-.525 2-.85Q7.7 11.8 9.25 11.8q1.525 0 2.7.325 1.175.325 1.988.85.812.525 1.225 1.187.412.663.412 1.338Zm14.7 6.2V21h1.4l1.4-13.5h-8.85l-.1-.7h4.5v-4h.7v4h4.5L19.6 21.7Zm0-.7h1.4-1.4ZM14.7 14.8q-.375-.925-1.762-1.612-1.388-.688-3.713-.688t-3.712.688q-1.388.687-1.763 1.612Zm-5.475 0Zm-6.35 3.8v-.7h12.7v.7Zm0 3.1V21h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100.displayName = 'AmauiIconMaterialFastfoodW100';

export default IconMaterialFastfoodW100;
