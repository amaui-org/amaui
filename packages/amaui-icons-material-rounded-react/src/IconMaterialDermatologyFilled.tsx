import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDermatologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DermatologyFilled'

      short_name='Dermatology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-17 0-28.5-11.5T80 896V576q0-33 23.5-56.5T160 496h160q8 0 15.5 3t13 8.5q5.5 5.5 8.5 13t3 15.5v40q0 50 35 85t85 35q50 0 85-35t35-85v-40q0-8 3-15.5t8.5-13q5.5-5.5 13-8.5t15.5-3h160q33 0 56.5 23.5T880 576v320q0 17-11.5 28.5T840 936H120Zm360-320q-17 0-28.5-11.5T440 576q0-109 25-215t109-175q13-11 29-9.5t27 14.5q11 13 9.5 29T625 247q-70 59-87.5 148T520 576q0 17-11.5 28.5T480 616ZM230 716q13 0 21.5-8.5T260 686q0-13-8.5-21.5T230 656q-13 0-21.5 8.5T200 686q0 13 8.5 21.5T230 716Zm40 100q13 0 21.5-8.5T300 786q0-13-8.5-21.5T270 756q-13 0-21.5 8.5T240 786q0 13 8.5 21.5T270 816Zm460-100q13 0 21.5-8.5T760 686q0-13-8.5-21.5T730 656q-13 0-21.5 8.5T700 686q0 13 8.5 21.5T730 716Z"/>
    </Icon>
  );
});

IconMaterialDermatologyFilled.displayName = 'AmauiIconMaterialDermatologyFilled';

export default IconMaterialDermatologyFilled;
