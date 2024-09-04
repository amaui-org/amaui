import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed05Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05Filled'

      short_name='Speed05'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360h120v-80H440q-17 0-28.5-11.5T400-480v-160q0-17 11.5-28.5T440-680h160q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H480v80h80q33 0 56.5 23.5T640-440v80q0 33-23.5 56.5T560-280H440Zm-120 0q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed05Filled.displayName = 'AmauiIconMaterialSpeed05Filled';

export default IconMaterialSpeed05Filled;
