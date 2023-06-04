import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityW100Filled'

      short_name='Visibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.9q1.425 0 2.413-.988.987-.987.987-2.412 0-1.425-.987-2.413Q13.425 8.1 12 8.1q-1.425 0-2.412.987-.988.988-.988 2.413 0 1.425.988 2.412.987.988 2.412.988Zm0-.7q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 3.5q-2.975 0-5.487-1.55Q4 14.6 2.625 11.95q-.05-.1-.075-.212-.025-.113-.025-.238 0-.125.025-.238.025-.112.075-.212Q4 8.4 6.513 6.85 9.025 5.3 12 5.3t5.488 1.55Q20 8.4 21.375 11.05q.05.1.075.212.025.113.025.238 0 .125-.025.238-.025.112-.075.212-1.375 2.65-3.887 4.2Q14.975 17.7 12 17.7Z"/>
    </Icon>
  );
});

IconMaterialVisibilityW100Filled.displayName = 'AmauiIconMaterialVisibilityW100Filled';

export default IconMaterialVisibilityW100Filled;
