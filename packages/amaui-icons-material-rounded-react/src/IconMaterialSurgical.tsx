import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurgical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Surgical'

      short_name='Surgical'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m440 936 80-80h320q17 0 28.5 11.5T880 896q0 17-11.5 28.5T840 936H440Zm56-226L346 560l332-332q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828 378L496 710Zm0-114 248-247-37-37-247 248 36 36ZM203 936q-46 0-88.5-18T40 868l265-264 104 104q14 14 22 32t8 38q0 20-8 38.5T409 849l-19 19q-32 32-74.5 50T227 936h-24Zm0-80h24q30 0 58-11.5t49-32.5l19-19q6-6 6-14t-6-14l-48-48-136 135q8 2 17 3t17 1Zm541-507-37-37 37 37ZM305 717Z"/>
    </Icon>
  );
});

IconMaterialSurgical.displayName = 'AmauiIconMaterialSurgical';

export default IconMaterialSurgical;
