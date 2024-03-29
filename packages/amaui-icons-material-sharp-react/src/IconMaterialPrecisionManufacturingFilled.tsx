import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrecisionManufacturingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrecisionManufacturingFilled'

      short_name='PrecisionManufacturing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 21v-3h3.1l-2.55-8.35q-.675-.375-1.112-1.1-.438-.725-.438-1.55 0-1.25.875-2.125T5.975 4q.975 0 1.738.562.762.563 1.062 1.438h3.2V4h1.8v.4L16 2.3l5.25 2.475-.65 1.3L16.325 4.1l-2.35 2.2v1.4l2.35 2.15 4.3-1.925.6 1.35L16 11.7l-2.225-2.1v.4h-1.8V8h-3.2q-.075.2-.162.375-.088.175-.238.375l5 9.25h3.6v3Zm2-13q.425 0 .713-.287.287-.288.287-.713t-.287-.713Q6.4 6 5.975 6t-.712.287q-.288.288-.288.713t.288.713Q5.55 8 5.975 8Z"/>
    </Icon>
  );
});

IconMaterialPrecisionManufacturingFilled.displayName = 'AmauiIconMaterialPrecisionManufacturingFilled';

export default IconMaterialPrecisionManufacturingFilled;
