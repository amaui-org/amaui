import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoofingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingW100'

      short_name='Roofing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 10.95q-.25 0-.35-.225-.1-.225.1-.4L11.5 5.2q.2-.2.5-.2t.5.2l3.3 2.975V6.35q0-.15.1-.25t.25-.1h.5q.15 0 .25.1t.1.25v2.9l1.2 1.1q.175.175.088.387-.088.213-.338.213-.05 0-.112-.025-.063-.025-.113-.075L12 5.7l-5.725 5.15q-.05.05-.1.075-.05.025-.125.025Zm4.6 7.75q-.325 0-.537-.213-.213-.212-.213-.537V15q0-.325.213-.538.212-.212.537-.212h2.7q.325 0 .538.212.212.213.212.538v2.95q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h2.8v-3.05h-2.8Z"/>
    </Icon>
  );
});

IconMaterialRoofingW100.displayName = 'AmauiIconMaterialRoofingW100';

export default IconMaterialRoofingW100;
