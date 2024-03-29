import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaFilled'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-4.725-.575-7.362-3.538Q2 15.5 2.025 10.85q2.75.275 4.65 1 1.9.725 3.088 2.05 1.187 1.325 1.712 3.312Q12 19.2 12 22Zm2-.4q-.05-1.75-.262-3.237-.213-1.488-.663-2.813 1.175-2.025 3.237-3.3 2.063-1.275 5.663-1.4.025 3.975-2.112 6.825Q17.725 20.525 14 21.6Zm-2-8.025q-.575-.875-1.562-1.725Q9.45 11 8.15 10.3q.3-2.125 1.35-4.388Q10.55 3.65 12 2q1.45 1.65 2.5 3.912 1.05 2.263 1.35 4.388-1.3.675-2.288 1.525-.987.85-1.562 1.75Z"/>
    </Icon>
  );
});

IconMaterialSpaFilled.displayName = 'AmauiIconMaterialSpaFilled';

export default IconMaterialSpaFilled;
