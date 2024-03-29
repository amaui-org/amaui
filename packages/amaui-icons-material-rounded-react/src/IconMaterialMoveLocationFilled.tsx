import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationFilled'

      short_name='MoveLocation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M792 816H665q-17 0-28.5-11.5T625 776q0-17 11.5-28.5T665 736h127l-36-36q-6-6-8.5-13t-2.5-14.5q0-7.5 3-15t9-13.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L813 908q-11 11-27.5 11.5T757 908q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l35-36ZM335 696q56 0 101-27.5t71-72.5q-35-29-79-44.5T335 536q-49 0-93 15.5T163 596q26 45 71 72.5T335 696Zm0-200q33 0 56.5-23.5T415 416q0-33-23.5-56.5T335 336q-33 0-56.5 23.5T255 416q0 33 23.5 56.5T335 496Zm0 465q-8 0-16-3t-14-8Q159 821 87 710.5T15 504q0-150 96.5-239T335 176q127 0 223.5 89T655 504q0 96-72 206.5T365 950q-6 5-14 8t-16 3Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationFilled.displayName = 'AmauiIconMaterialMoveLocationFilled';

export default IconMaterialMoveLocationFilled;
