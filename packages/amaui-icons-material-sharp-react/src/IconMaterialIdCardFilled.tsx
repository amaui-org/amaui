import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIdCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IdCardFilled'

      short_name='IdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialIdCardFilled.displayName = 'AmauiIconMaterialIdCardFilled';

export default IconMaterialIdCardFilled;
