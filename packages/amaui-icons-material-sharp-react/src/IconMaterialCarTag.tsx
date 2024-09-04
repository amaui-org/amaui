import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarTag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTag'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm-100 40v-200 200Zm40 80v80H80v-360l98-280h182v80H234l-42 120h254l80 80H160v200h560v-37l80-80v277H680v-80H200Zm400-520q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Zm104 305L440-680v-240h240l264 265-240 240Zm0-113 127-127-185-185H520v127l184 185Zm-84 208q14 0 25.5-5.5T665-341l-84-84q-10 8-15.5 19.5T560-380q0 25 17.5 42.5T620-320Zm56-364Z"/>
    </Icon>
  );
});

IconMaterialCarTag.displayName = 'AmauiIconMaterialCarTag';

export default IconMaterialCarTag;
