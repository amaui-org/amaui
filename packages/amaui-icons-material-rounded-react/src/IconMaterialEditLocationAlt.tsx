import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAlt'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11h2.1l6.2-6.2-2.1-2.1L11 8.9Zm9-6.9.7-.7q.3-.3.3-.7 0-.4-.3-.7l-.7-.7q-.3-.3-.7-.3-.4 0-.7.3l-.7.7Zm-8 17.525q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.675 0 1.338.112.662.113 1.287.313L13 4.075q-.25-.05-.488-.063Q12.275 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-.3-.025-.588-.025-.287-.075-.562l1.65-1.65q.225.65.338 1.35.112.7.112 1.45 0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Zm0-9.95Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAlt.displayName = 'AmauiIconMaterialEditLocationAlt';

export default IconMaterialEditLocationAlt;
