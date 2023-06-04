import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterFilled'

      short_name='AlignCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 616q-17 0-28.5-11.5T80 576q0-17 11.5-28.5T120 536h720q17 0 28.5 11.5T880 576q0 17-11.5 28.5T840 616H120Zm200-120q-17 0-28.5-11.5T280 456v-40q0-17 11.5-28.5T320 376h320q17 0 28.5 11.5T680 416v40q0 17-11.5 28.5T640 496H320Zm0 280q-17 0-28.5-11.5T280 736v-40q0-17 11.5-28.5T320 656h320q17 0 28.5 11.5T680 696v40q0 17-11.5 28.5T640 776H320Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterFilled.displayName = 'AmauiIconMaterialAlignCenterFilled';

export default IconMaterialAlignCenterFilled;
