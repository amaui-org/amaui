import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEnd'

      short_name='AlignEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm200-440q-17 0-28.5-11.5T280 496v-40q0-17 11.5-28.5T320 416h320q17 0 28.5 11.5T680 456v40q0 17-11.5 28.5T640 536H320Zm0 240q-17 0-28.5-11.5T280 736v-40q0-17 11.5-28.5T320 656h320q17 0 28.5 11.5T680 696v40q0 17-11.5 28.5T640 776H320Z"/>
    </Icon>
  );
});

IconMaterialAlignEnd.displayName = 'AmauiIconMaterialAlignEnd';

export default IconMaterialAlignEnd;
