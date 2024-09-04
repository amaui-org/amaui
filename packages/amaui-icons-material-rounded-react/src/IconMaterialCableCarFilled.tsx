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
      <path d="M160-160q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240v-480q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h93l18-53q4-12 14.5-19.5T309-880h342q13 0 23.5 7.5T689-853l18 53h93q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720v480q17 0 28.5 11.5T840-200q0 17-11.5 28.5T800-160H680q0 17-11.5 28.5T640-120H320q-17 0-28.5-11.5T280-160H160Zm80-360h120v-140q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660v140Zm180 0h120v-140q0-25-17.5-42.5T480-720q-25 0-42.5 17.5T420-660v140Zm180 0h120v-140q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660v140ZM480-280q25 0 42.5-17.5T540-340q0-25-17.5-42.5T480-400q-25 0-42.5 17.5T420-340q0 25 17.5 42.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialCableCarFilled.displayName = 'AmauiIconMaterialCableCarFilled';

export default IconMaterialCableCarFilled;
