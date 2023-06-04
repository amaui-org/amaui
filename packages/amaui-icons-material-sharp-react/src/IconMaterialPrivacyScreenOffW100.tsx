import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOffW100'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M852 988 708 844H132V313h45l-87-87 20-20 762 762-20 20ZM160 797l251-251-121-120-130 130v241Zm0-280 111-111-71-70h-40v181Zm19 299h501L430 565 179 816Zm649-3-28-29V336H659L505 490l-19-19 134-135H379l-14 14-41-42h504v505ZM440 576Zm136-16Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffW100.displayName = 'AmauiIconMaterialPrivacyScreenOffW100';

export default IconMaterialPrivacyScreenOffW100;
