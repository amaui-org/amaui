import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastRtlOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastRtlOffW100Filled'

      short_name='ContrastRtlOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M852 988 705 841q-46 39-103 61t-122 22q-72.21 0-135.72-27.405-63.51-27.405-110.49-74.385-46.98-46.98-74.385-110.49Q132 648.21 132 576q0-65 22-122t61-103L90 226l20-20 762 762-20 20Zm-372-92q59 0 111-20t94-55L480 616v280Zm296-136-21-21q22-36 33.5-76.821Q800 621.357 800 576q0-133-93.5-226.5T480 256v208L296 280q40.145-24.8 86.564-38.4Q428.982 228 480 228q72.21 0 135.72 27.405 63.51 27.405 110.49 74.385 46.98 46.98 74.385 110.49Q828 503.79 828 576q0 51.018-13.6 97.436Q800.8 719.855 776 760Z"/>
    </Icon>
  );
});

IconMaterialContrastRtlOffW100Filled.displayName = 'AmauiIconMaterialContrastRtlOffW100Filled';

export default IconMaterialContrastRtlOffW100Filled;
