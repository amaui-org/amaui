import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableCarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableCarFilled'

      short_name='CableCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-40H120v-80h40v-480h-40v-80h133l27-80h400l27 80h133v80h-40v480h40v80H680v40H280Zm200-160q25 0 42.5-17.5T540-340q0-25-17.5-42.5T480-400q-25 0-42.5 17.5T420-340q0 25 17.5 42.5T480-280ZM240-520h120v-140q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660v140Zm180 0h120v-140q0-25-17.5-42.5T480-720q-25 0-42.5 17.5T420-660v140Zm180 0h120v-140q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660v140Z"/>
    </Icon>
  );
});

IconMaterialCableCarFilled.displayName = 'AmauiIconMaterialCableCarFilled';

export default IconMaterialCableCarFilled;
