import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeDualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeDualW100'

      short_name='ModeDual'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-649v41l-69-69q-18.71-19-42.409-28.5-23.699-9.5-48.645-9.5t-48.606 9.5Q167.679-696 149-677l-57 56-20-20 56-57q23.236-23 52.497-34.5t59.382-11.5q30.121 0 58.988 11.5T351-698l49 49Zm0 170v41l-69-69q-18.71-19-42.409-28.5-23.699-9.5-48.645-9.5t-48.606 9.5Q167.679-526 149-507l-57 56-20-19 56-58q23-24 52.319-35 29.319-11 59.5-11t59.048 11.5Q327.734-551 351-528l49 49Zm0 170v40l-70-68q-18.71-19-42.409-28.5-23.699-9.5-48.645-9.5t-48.606 9.5Q166.679-356 148-337l-57 56-19-19 56-58q23.054-23 52.085-34.5Q209.115-404 239-404q30.388 0 59.473 11.5Q327.558-381 351-358l49 49Zm100 203v-748h28v202l156-154 20 20-176 176v116h116l176-176 20 20-154 156h202v28H686l154 156-20 20-176-176H528v116l176 176-20 20-156-154v202h-28Z"/>
    </Icon>
  );
});

IconMaterialModeDualW100.displayName = 'AmauiIconMaterialModeDualW100';

export default IconMaterialModeDualW100;
