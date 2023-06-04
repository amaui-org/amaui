import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStartFilled'

      short_name='AlignStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 256q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Zm200 240q-17 0-28.5-11.5T280 456v-40q0-17 11.5-28.5T320 376h320q17 0 28.5 11.5T680 416v40q0 17-11.5 28.5T640 496H320Zm0 240q-17 0-28.5-11.5T280 696v-40q0-17 11.5-28.5T320 616h320q17 0 28.5 11.5T680 656v40q0 17-11.5 28.5T640 736H320Z"/>
    </Icon>
  );
});

IconMaterialAlignStartFilled.displayName = 'AmauiIconMaterialAlignStartFilled';

export default IconMaterialAlignStartFilled;
