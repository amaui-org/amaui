import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPottedPlantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantFilled'

      short_name='PottedPlant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 22q-.7 0-1.225-.425-.525-.425-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1Q16.15 22 15.45 22ZM6.75 2.05q2.225.275 3.738 1.962Q12 5.7 12 8q0-2.3 1.512-3.988 1.513-1.687 3.738-1.962.3-.05.525.175.225.225.175.525-.25 1.975-1.625 3.387Q14.95 7.55 13 7.9V10h7q.425 0 .712.287.288.288.288.713v2q0 .825-.587 1.412Q19.825 15 19 15H5q-.825 0-1.413-.588Q3 13.825 3 13v-2q0-.425.288-.713Q3.575 10 4 10h7V7.9q-1.95-.35-3.325-1.763Q6.3 4.725 6.05 2.75q-.05-.3.175-.525Q6.45 2 6.75 2.05Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantFilled.displayName = 'AmauiIconMaterialPottedPlantFilled';

export default IconMaterialPottedPlantFilled;
