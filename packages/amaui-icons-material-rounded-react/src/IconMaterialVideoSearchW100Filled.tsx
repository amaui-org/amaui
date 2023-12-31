import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSearchW100Filled'

      short_name='VideoSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-529.202v-101.301q0-9.497 7.5-13.997t15.536.3L439-593q7 4.5 7 12.75T439-567l-81.964 51.2q-8.036 4.8-15.536.447t-7.5-13.849ZM382-360q-92.231 0-156.115-63.837Q162-487.675 162-579.837 162-672 225.837-736q63.838-64 156-64Q474-800 538-736.115 602-672.231 602-580q0 41-15 80t-39 66l240 240q4 4 4.5 9.5T788-174q-5 5-10 5t-10-5L528-414q-30 26-69 40t-77 14Zm0-28q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/>
    </Icon>
  );
});

IconMaterialVideoSearchW100Filled.displayName = 'AmauiIconMaterialVideoSearchW100Filled';

export default IconMaterialVideoSearchW100Filled;
