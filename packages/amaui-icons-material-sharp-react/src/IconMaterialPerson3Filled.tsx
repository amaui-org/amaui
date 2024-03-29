import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3Filled'

      short_name='Person3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038.175-.487.525-.887-.1-.25-.15-.525Q7.5 8.275 7.5 8q0-.95.512-1.688.513-.737 1.338-1.087.5-.575 1.175-.9Q11.2 4 12 4t1.475.325q.675.325 1.175.9.825.35 1.338 1.087Q16.5 7.05 16.5 8q0 .275-.05.55t-.15.525q.35.4.525.887Q17 10.45 17 11q0 1.25-.875 2.125T14 14Zm-6 8v-2.8q0-.85.438-1.562.437-.713 1.162-1.088 1.55-.775 3.15-1.163Q10.35 15 12 15t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.088Q20 18.35 20 19.2V22Z"/>
    </Icon>
  );
});

IconMaterialPerson3Filled.displayName = 'AmauiIconMaterialPerson3Filled';

export default IconMaterialPerson3Filled;
