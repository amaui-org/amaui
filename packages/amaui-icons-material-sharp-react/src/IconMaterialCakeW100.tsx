import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7v-6.9h2V8.1h5.35V6.6q-.425-.275-.712-.613-.288-.337-.288-.787 0-.275.1-.512.1-.238.3-.438L12 3.3l.95.95q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h5.35v5.7h2v6.9ZM7 13.8h10v-5H7ZM5 20h14v-5.5H5Zm2-6.2h10ZM5 20h14Zm12.7-6.2H6.3h11.4Z"/>
    </Icon>
  );
});

IconMaterialCakeW100.displayName = 'AmauiIconMaterialCakeW100';

export default IconMaterialCakeW100;
