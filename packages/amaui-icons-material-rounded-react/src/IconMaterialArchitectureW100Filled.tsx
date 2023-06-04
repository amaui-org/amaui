import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchitectureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureW100Filled'

      short_name='Architecture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 12.3 7.825 19q-.025.05-.125.15l-.175.15q-.1.075-.187.037-.088-.037-.113-.112L7.15 19q-.025-.05.025-.2L9.65 12q.15.125.3.188.15.062.3.112Zm3.5 0q.15-.05.3-.112.15-.063.275-.188l2.475 6.8.025.2-.075.225q-.025.075-.112.112-.088.038-.188-.037l-.175-.15-.125-.15ZM12 10.35q-.975 0-1.662-.688Q9.65 8.975 9.65 8q0-.975.625-1.6.625-.625 1.375-.7V3.35q0-.15.1-.25T12 3q.15 0 .25.1t.1.25V5.7q.75.075 1.375.7T14.35 8q0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q12.675 6.35 12 6.35t-1.162.487Q10.35 7.325 10.35 8t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialArchitectureW100Filled.displayName = 'AmauiIconMaterialArchitectureW100Filled';

export default IconMaterialArchitectureW100Filled;
