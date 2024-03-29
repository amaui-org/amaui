import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConstructionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionFilled'

      short_name='Construction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.9 21-5.475-5.475 2.1-2.1L21 18.9ZM5.1 21 3 18.9 9.9 12l-1.7-1.7-.7.7-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725Q9.2 3 9.8 3q.6 0 1.175.225.575.225 1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575-.063-.3-.063-.6 0-1.475 1.013-2.488 1.012-1.012 2.487-1.012.375 0 .713.075.337.075.687.225L16.45 5.75l1.8 1.8 2.475-2.475q.175.35.238.687.062.338.062.713 0 1.475-1.012 2.487Q19 9.975 17.525 9.975q-.3 0-.6-.05t-.575-.175Z"/>
    </Icon>
  );
});

IconMaterialConstructionFilled.displayName = 'AmauiIconMaterialConstructionFilled';

export default IconMaterialConstructionFilled;
