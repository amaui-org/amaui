import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2'

      short_name='Spo2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 896V656h180v240H440Zm60-60h60V716h-60v120Zm180 140V826h120v-30H680v-60h180v150H740v30h120v60H680Zm-320-2q-123-14-201.5-105.5T80 648q0-100 79.5-217.5T400 176q132 112 209.5 212T710 576h-83q-22-63-79-137T400 282Q281 391 220.5 483T160 648q0 96 55.5 163.5T360 893v81Zm34-326Z"/>
    </Icon>
  );
});

IconMaterialSpo2.displayName = 'AmauiIconMaterialSpo2';

export default IconMaterialSpo2;
