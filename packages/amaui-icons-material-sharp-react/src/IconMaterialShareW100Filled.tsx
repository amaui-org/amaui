import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareW100Filled'

      short_name='Share'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 21.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.2.038-.425.037-.225.112-.425l-7.95-4.7q-.35.425-.825.663-.475.237-1.025.237-.975 0-1.662-.688Q3.65 12.975 3.65 12q0-.975.688-1.663Q5.025 9.65 6 9.65q.55 0 1.025.237.475.238.825.663l7.95-4.7q-.075-.2-.112-.425Q15.65 5.2 15.65 5q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688-.55 0-1.025-.238-.475-.237-.825-.662l-7.95 4.7q.075.2.112.425.038.225.038.425 0 .2-.038.425-.037.225-.112.425l7.95 4.7q.35-.425.825-.663.475-.237 1.025-.237.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687Z"/>
    </Icon>
  );
});

IconMaterialShareW100Filled.displayName = 'AmauiIconMaterialShareW100Filled';

export default IconMaterialShareW100Filled;
