import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibility = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Visibility'

      short_name='Visibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7q-1.875 0-3.188 1.312Q7.5 9.625 7.5 11.5q0 1.875 1.312 3.188Q10.125 16 12 16Zm0-1.8q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 4.8q-3.475 0-6.35-1.837Q2.775 15.325 1.3 12.2q-.075-.125-.1-.313-.025-.187-.025-.387t.025-.388q.025-.187.1-.312 1.475-3.125 4.35-4.962Q8.525 4 12 4q3.475 0 6.35 1.838 2.875 1.837 4.35 4.962.075.125.1.312.025.188.025.388t-.025.387q-.025.188-.1.313-1.475 3.125-4.35 4.963Q15.475 19 12 19Zm0-7.5Zm0 5.5q2.825 0 5.188-1.488Q19.55 14.025 20.8 11.5q-1.25-2.525-3.612-4.013Q14.825 6 12 6 9.175 6 6.812 7.487 4.45 8.975 3.2 11.5q1.25 2.525 3.612 4.012Q9.175 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialVisibility.displayName = 'AmauiIconMaterialVisibility';

export default IconMaterialVisibility;
