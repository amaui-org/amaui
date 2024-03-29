import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltFilled'

      short_name='MemoryAlt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 696q17 0 28.5-11.5T320 656V496q0-17-11.5-28.5T280 456q-17 0-28.5 11.5T240 496v160q0 17 11.5 28.5T280 696Zm200 0q17 0 28.5-11.5T520 656V496q0-17-11.5-28.5T480 456q-17 0-28.5 11.5T440 496v160q0 17 11.5 28.5T480 696Zm200 0q17 0 28.5-11.5T720 656V496q0-17-11.5-28.5T680 456q-17 0-28.5 11.5T640 496v160q0 17 11.5 28.5T680 696ZM160 856q-33 0-56.5-23.5T80 776V376q0-33 23.5-56.5T160 296h40v-40q0-17 11.5-28.5T240 216q17 0 28.5 11.5T280 256v40h160v-40q0-17 11.5-28.5T480 216q17 0 28.5 11.5T520 256v40h160v-40q0-17 11.5-28.5T720 216q17 0 28.5 11.5T760 256v40h40q33 0 56.5 23.5T880 376v400q0 33-23.5 56.5T800 856h-40v40q0 17-11.5 28.5T720 936q-17 0-28.5-11.5T680 896v-40H520v40q0 17-11.5 28.5T480 936q-17 0-28.5-11.5T440 896v-40H280v40q0 17-11.5 28.5T240 936q-17 0-28.5-11.5T200 896v-40h-40Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltFilled.displayName = 'AmauiIconMaterialMemoryAltFilled';

export default IconMaterialMemoryAltFilled;
