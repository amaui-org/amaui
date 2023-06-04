import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBikeW100Filled'

      short_name='DirectionsBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 5.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-4.95 5 2.3 2.4v5.6h-.7v-4.925l-4.625-3.35L11.05 6.05q.2-.2.475-.313.275-.112.575-.112.3 0 .575.112.275.113.475.313l1.9 1.9q.65.65 1.512 1.087.863.438 1.888.563v.75q-1.25-.125-2.225-.612-.975-.488-1.775-1.288L13.2 7.2ZM5.5 21.2q-1.775 0-2.987-1.213Q1.3 18.775 1.3 17q0-1.775 1.213-2.988Q3.725 12.8 5.5 12.8q1.775 0 2.988 1.212Q9.7 15.225 9.7 17t-1.212 2.987Q7.275 21.2 5.5 21.2Zm0-.7q1.475 0 2.488-1.012Q9 18.475 9 17t-1.012-2.488Q6.975 13.5 5.5 13.5t-2.487 1.012Q2 15.525 2 17t1.013 2.488Q4.025 20.5 5.5 20.5Zm13 .7q-1.775 0-2.987-1.213Q14.3 18.775 14.3 17q0-1.775 1.213-2.988Q16.725 12.8 18.5 12.8q1.775 0 2.988 1.212Q22.7 15.225 22.7 17t-1.212 2.987Q20.275 21.2 18.5 21.2Zm0-.7q1.475 0 2.488-1.012Q22 18.475 22 17t-1.012-2.488Q19.975 13.5 18.5 13.5t-2.487 1.012Q15 15.525 15 17t1.013 2.488Q17.025 20.5 18.5 20.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBikeW100Filled.displayName = 'AmauiIconMaterialDirectionsBikeW100Filled';

export default IconMaterialDirectionsBikeW100Filled;
