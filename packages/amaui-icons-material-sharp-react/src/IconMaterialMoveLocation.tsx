import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocation'

      short_name='MoveLocation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m785 936-56-56 63-64H625v-80h167l-63-64 56-56 160 160-160 160ZM335 696q56 0 101-27.5t71-72.5q-35-29-79-44.5T335 536q-49 0-93 15.5T163 596q26 45 71 72.5T335 696Zm0-200q33 0 56.5-23.5T415 416q0-33-23.5-56.5T335 336q-33 0-56.5 23.5T255 416q0 33 23.5 56.5T335 496Zm0 374q122-112 181-203.5T575 504q0-109-69.5-178.5T335 256q-101 0-170.5 69.5T95 504q0 71 59 162.5T335 870Zm0 106Q174 839 94.5 721.5T15 504q0-150 96.5-239T335 176q127 0 223.5 89T655 504q0 100-79.5 217.5T335 976Zm0-413Z"/>
    </Icon>
  );
});

IconMaterialMoveLocation.displayName = 'AmauiIconMaterialMoveLocation';

export default IconMaterialMoveLocation;
