import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100Filled'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 13.6V8.1h5.35V6.6q-.425-.275-.712-.613-.288-.337-.288-.787 0-.275.1-.512.1-.238.3-.438L12 3.3l.95.95q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h5.35v5.5Zm-2 7.1v-6.4h15.4v6.4Z"/>
    </Icon>
  );
});

IconMaterialCakeW100Filled.displayName = 'AmauiIconMaterialCakeW100Filled';

export default IconMaterialCakeW100Filled;
