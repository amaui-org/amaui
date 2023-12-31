import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactsProduct = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsProduct'

      short_name='ContactsProduct'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-80q-17 0-29.5-12.5T143-122v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20h-87Zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80H332Zm148-484q-66 0-112-46t-46-112q0-66 46-112t112-46q66 0 112 46t46 112q0 66-46 112t-112 46Z"/>
    </Icon>
  );
});

IconMaterialContactsProduct.displayName = 'AmauiIconMaterialContactsProduct';

export default IconMaterialContactsProduct;
