import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGondolaLift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GondolaLift'

      short_name='GondolaLift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320q0-66 47-113t113-47h160v-109L40-600v-80l205-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T300-820q23 0 40 15t19 38l81-22v-51h80v29l86-23q-3-6-4.5-12.5T600-860q0-25 17.5-42.5T660-920q23 0 40.5 16t19.5 39l200-55v80L520-731v131h160q66 0 113 47t47 113v320H120Zm80-80h560v-80H200v80Zm0-160h133v-160h-53q-33 0-56.5 23.5T200-440v80Zm213 0h133v-160H413v160Zm214 0h133v-80q0-33-23.5-56.5T680-520h-53v160ZM200-200v-80 80Z"/>
    </Icon>
  );
});

IconMaterialGondolaLift.displayName = 'AmauiIconMaterialGondolaLift';

export default IconMaterialGondolaLift;
