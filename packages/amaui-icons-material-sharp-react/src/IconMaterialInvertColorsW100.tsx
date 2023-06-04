import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsW100'

      short_name='InvertColors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-2.8 0-4.75-1.912-1.95-1.913-1.95-4.663 0-1.425.538-2.575.537-1.15 1.412-2.1L12 3.8l4.75 4.65q.875.95 1.413 2.137.537 1.188.537 2.538 0 2.75-1.95 4.663Q14.8 19.7 12 19.7Zm0-.7V4.8L7.75 9q-.875.825-1.312 1.875Q6 11.925 6 13.125q0 2.425 1.75 4.15Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsW100.displayName = 'AmauiIconMaterialInvertColorsW100';

export default IconMaterialInvertColorsW100;
