import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightW100'

      short_name='Light'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.5q-1.175 0-1.987-.812Q9.2 16.875 9.2 15.7H4.35q-.025-.15-.038-.325Q4.3 15.2 4.3 15q0-3.025 2.125-5.3t5.225-2.4V4.8h.7v2.5q3.1.125 5.225 2.4Q19.7 11.975 19.7 15q0 .2-.012.375-.013.175-.038.325H14.8q0 1.175-.812 1.988-.813.812-1.988.812ZM5 15h14q0-2.9-2.05-4.95Q14.9 8 12 8q-2.9 0-4.95 2.05Q5 12.1 5 15Zm7 2.8q.875 0 1.488-.612.612-.613.612-1.488H9.9q0 .875.612 1.488.613.612 1.488.612Zm0-2.1Z"/>
    </Icon>
  );
});

IconMaterialLightW100.displayName = 'AmauiIconMaterialLightW100';

export default IconMaterialLightW100;
