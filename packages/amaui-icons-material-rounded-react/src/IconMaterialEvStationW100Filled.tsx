import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvStationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStationW100Filled'

      short_name='EvStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 18.05 10.8 15q.05-.125 0-.225t-.175-.1H9.5v-2.25q0-.175-.15-.213-.15-.037-.25.088l-1.9 3.05q-.05.125 0 .225t.175.1H8.5v2.25q0 .175.15.213.15.037.25-.088ZM6 10.65h6V5.8q0-.3-.25-.55Q11.5 5 11.2 5H6.8q-.3 0-.55.25Q6 5.5 6 5.8Zm.05 9.05q-.325 0-.537-.213-.213-.212-.213-.537V5.8q0-.65.425-1.075Q6.15 4.3 6.8 4.3h4.4q.65 0 1.075.425.425.425.425 1.075v5.7h.9q.625 0 1.063.438.437.437.437 1.062v4.6q0 .575.463.987.462.413 1.062.413.625 0 1.075-.413.45-.412.45-.987V8.85h-.375q-.3 0-.525-.225-.225-.225-.225-.525V7.025q0-.15.113-.263.112-.112.262-.112V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65h.8V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65q.15 0 .263.112.112.113.112.238v1.1q0 .3-.212.525-.213.225-.538.225h-.375v8.75q0 .875-.65 1.487-.65.613-1.575.613-.9 0-1.563-.613-.662-.612-.662-1.487V13q0-.35-.225-.575-.225-.225-.575-.225h-.9v6.75q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialEvStationW100Filled.displayName = 'AmauiIconMaterialEvStationW100Filled';

export default IconMaterialEvStationW100Filled;
