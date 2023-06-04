import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransgenderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderW100Filled'

      short_name='Transgender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.65q1.725 0 2.938-1.212 1.212-1.213 1.212-2.938t-1.212-2.938Q13.725 7.35 12 7.35T9.062 8.562Q7.85 9.775 7.85 11.5t1.212 2.938Q10.275 15.65 12 15.65Zm-.35 6.7v-2h-2v-.7h2v-3.3q-2-.225-3.25-1.6T7.15 11.5q0-.825.3-1.663Q7.75 9 8.3 8.3L6.55 6.55l-1.4 1.4-.475-.475 1.4-1.4L2.85 2.85v3.5h-.7v-4.7h4.7v.7h-3.5l3.225 3.225 1.4-1.4.475.475-1.4 1.4 1.775 1.775q.8-.65 1.613-.913Q11.25 6.65 12 6.65t1.562.262q.813.263 1.613.913L20.65 2.35h-3.5v-.7h4.7v4.7h-.7v-3.5l-5.475 5.475q.575.725.875 1.537.3.813.3 1.638 0 1.875-1.25 3.25t-3.25 1.6v3.3h2v.7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialTransgenderW100Filled.displayName = 'AmauiIconMaterialTransgenderW100Filled';

export default IconMaterialTransgenderW100Filled;
