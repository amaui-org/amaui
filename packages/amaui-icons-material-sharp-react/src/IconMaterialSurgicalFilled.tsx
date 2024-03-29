import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurgicalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalFilled'

      short_name='Surgical'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M496 710 346 560l361-361 150 150-361 361Zm-56 226 80-80h360v80H440Zm-237 0q-46 0-88.5-18T40 868l265-264 175 174-90 90q-32 32-74.5 50T227 936h-24Z"/>
    </Icon>
  );
});

IconMaterialSurgicalFilled.displayName = 'AmauiIconMaterialSurgicalFilled';

export default IconMaterialSurgicalFilled;
