import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatabaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseW100'

      short_name='Database'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.85q-3.5 0-5.925-.975T3.65 8.5q0-1.4 2.425-2.375Q8.5 5.15 12 5.15t5.925.975Q20.35 7.1 20.35 8.5t-2.425 2.375Q15.5 11.85 12 11.85Zm0 3.7q-3.5 0-5.925-.975T3.65 12.2v-.05q.525.425 1.375.825.85.4 1.938.7 1.087.3 2.375.487 1.287.188 2.662.188t2.663-.188q1.287-.187 2.375-.487 1.087-.3 1.937-.7.85-.4 1.375-.825v.05q0 1.4-2.425 2.375-2.425.975-5.925.975Zm0 3.7q-3.5 0-5.925-.975T3.65 15.9v-.05q.525.425 1.375.825.85.4 1.938.7 1.087.3 2.375.488 1.287.187 2.662.187t2.663-.187q1.287-.188 2.375-.488 1.087-.3 1.937-.7.85-.4 1.375-.825v.05q0 1.4-2.425 2.375-2.425.975-5.925.975Z"/>
    </Icon>
  );
});

IconMaterialDatabaseW100.displayName = 'AmauiIconMaterialDatabaseW100';

export default IconMaterialDatabaseW100;
