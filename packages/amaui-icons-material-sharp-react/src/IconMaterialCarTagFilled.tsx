import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarTagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTagFilled'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-360l98-280h182v80H234l-42 120h254l135 135q-10 8-15.5 19.5T560-380q0 25 17.5 42.5T620-320q14 0 25.5-5.5T665-341l39 39 96-95v277H680v-80H200v80H80Zm180-200q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm444-95L440-680v-240h240l264 265-240 240ZM600-720q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z"/>
    </Icon>
  );
});

IconMaterialCarTagFilled.displayName = 'AmauiIconMaterialCarTagFilled';

export default IconMaterialCarTagFilled;
