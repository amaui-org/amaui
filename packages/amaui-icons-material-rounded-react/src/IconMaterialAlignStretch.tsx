import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretch'

      short_name='AlignStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 496q-17 0-28.5-11.5T280 456V256H120q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H680v200q0 17-11.5 28.5T640 496H320ZM120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h160V696q0-17 11.5-28.5T320 656h320q17 0 28.5 11.5T680 696v200h160q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Z"/>
    </Icon>
  );
});

IconMaterialAlignStretch.displayName = 'AmauiIconMaterialAlignStretch';

export default IconMaterialAlignStretch;
