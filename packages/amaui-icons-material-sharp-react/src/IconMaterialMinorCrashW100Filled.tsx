import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinorCrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrashW100Filled'

      short_name='MinorCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 6.225 5.925 4.15l.475-.475L8.475 5.75Zm8 0-.475-.475L17.6 3.675l.475.475ZM11.65 5.1V1.4h.7v3.7ZM4.3 22.7v-7.5l2.075-5.9h11.25l2.075 5.9v7.5H19v-2H5v2Zm1-8.2h13.4L17.1 10H6.9Zm2.1 4.1q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q7.825 16.6 7.4 16.6t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialMinorCrashW100Filled.displayName = 'AmauiIconMaterialMinorCrashW100Filled';

export default IconMaterialMinorCrashW100Filled;
