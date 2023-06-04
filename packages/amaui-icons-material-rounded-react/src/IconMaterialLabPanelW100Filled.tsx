import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelW100Filled'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 19.7q-.625 0-1.062-.438Q2.3 18.825 2.3 18.2v-3.4q0-.625.438-1.063.437-.437 1.062-.437h.5V8.5h-.25q-.325 0-.537-.213Q3.3 8.075 3.3 7.75V6.4q0-.325.213-.538.212-.212.537-.212h4.9q.325 0 .538.212.212.213.212.538v1.35q0 .325-.212.537-.213.213-.538.213H8.7v4.8h6.6V8.5h-.25q-.325 0-.537-.213-.213-.212-.213-.537V6.4q0-.325.213-.538.212-.212.537-.212h4.9q.325 0 .538.212.212.213.212.538v1.35q0 .325-.212.537-.213.213-.538.213h-.25v4.8h.5q.625 0 1.063.437.437.438.437 1.063v3.4q0 .625-.437 1.062-.438.438-1.063.438ZM16 13.3h3V8.5h-3Zm-11 0h3V8.5H5Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100Filled.displayName = 'AmauiIconMaterialLabPanelW100Filled';

export default IconMaterialLabPanelW100Filled;
