import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderOffW100Filled'

      short_name='SmartCardReaderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m852-118-64-64H132v-116h540l-80-80H243v-349L90-880l20-20 762 762-20 20ZM717-878v475L567-555q17-5 27.5-18t10.5-31q0-21-15-36t-36-15q-17 0-30.5 10.5T505-618L249-878h468ZM331-479h22q24 0 40-19.5t23-55.5l-85-85v160Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderOffW100Filled.displayName = 'AmauiIconMaterialSmartCardReaderOffW100Filled';

export default IconMaterialSmartCardReaderOffW100Filled;
