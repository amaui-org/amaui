import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovedLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovedLocationW100'

      short_name='MovedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-477-19-19 131-131q-165 0-239.5 22.5T467-531q52-89 154.5-106.5T830-655L701-784l19-19 163 163-163 163ZM480-114Q332-243 259-351.5T186-552q0-125 85-213.5T480-854q38 0 74.5 7.5T623-819l-22 23q-27-17-58-23.5t-63-6.5q-112 0-189 80.5T214-552q0 76 65 176t201 224q61-56 113-113.5T693-391l20 20q-56 78-115.5 142.5T480-114Z"/>
    </Icon>
  );
});

IconMaterialMovedLocationW100.displayName = 'AmauiIconMaterialMovedLocationW100';

export default IconMaterialMovedLocationW100;
