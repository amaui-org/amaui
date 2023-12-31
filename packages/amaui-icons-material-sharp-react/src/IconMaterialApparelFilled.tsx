import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApparelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApparelFilled'

      short_name='Apparel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-522-75 41L46-689l264-151h90v40q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-40h90l264 151-118 206-76-38v401H240v-402Z"/>
    </Icon>
  );
});

IconMaterialApparelFilled.displayName = 'AmauiIconMaterialApparelFilled';

export default IconMaterialApparelFilled;
