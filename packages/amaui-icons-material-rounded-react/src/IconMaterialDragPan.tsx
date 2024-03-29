import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragPan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPan'

      short_name='DragPan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 615H235l44 44q12 12 12 29t-12 29q-12 12-29 12t-29-12L108 604q-12-12-12-28t12-28l113-113q12-12 28.5-12t28.5 12q12 12 12 28.5T278 492l-44 44h206V330l-45 45q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l113-114q12-12 28-12t28 12l114 114q12 12 12 28t-12 28q-12 12-28.5 12T565 374l-45-44v206l205 1-44-44q-12-12-12-29t12-29q12-12 29-12t29 12l113 113q12 12 12 28t-12 28L738 718q-12 12-28.5 11.5T681 717q-12-12-12-28.5t12-28.5l45-45H520v206l43-44q12-12 29-12t29 12q12 12 12 29t-12 29L508 948q-12 12-28 12t-28-12L338 834q-12-12-11.5-28.5T339 777q12-12 28.5-12t28.5 12l44 45V615Z"/>
    </Icon>
  );
});

IconMaterialDragPan.displayName = 'AmauiIconMaterialDragPan';

export default IconMaterialDragPan;
