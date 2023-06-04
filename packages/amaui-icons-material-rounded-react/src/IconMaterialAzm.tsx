import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Azm'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M468 948q-19 19-43.5 8.5T400 919V656H137q-27 0-37.5-24.5T108 588l309-309q11-11 25.5-17t30.5-6h247q33 0 56.5 23.5T800 336v247q0 16-6 30.5T777 639L468 948Zm172-492v207l80-80V336H473l-80 80h207q17 0 28.5 11.5T640 456ZM480 616v207l80-80V496H313l-80 80h207q17 0 28.5 11.5T480 616Z"/>
    </Icon>
  );
});

IconMaterialAzm.displayName = 'AmauiIconMaterialAzm';

export default IconMaterialAzm;
