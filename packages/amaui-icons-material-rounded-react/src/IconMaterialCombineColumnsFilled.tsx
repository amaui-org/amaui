import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCombineColumnsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CombineColumnsFilled'

      short_name='CombineColumns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-33 0-56.5-23.5T520-200v-58q0-11 7-20.5t18-12.5q60-21 97.5-72.5T680-480q0-65-37.5-116.5T545-669q-11-4-18-13t-7-20v-58q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm-400 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v58q0 11-7 20t-18 13q-60 21-97.5 72.5T280-480q0 65 37.5 116.5T415-291q11 4 18 13t7 20v58q0 33-23.5 56.5T360-120H200Zm280-240q-17 0-28.5-11.5T440-400v-40h-40q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h40v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h40q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440h-40v40q0 17-11.5 28.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialCombineColumnsFilled.displayName = 'AmauiIconMaterialCombineColumnsFilled';

export default IconMaterialCombineColumnsFilled;
