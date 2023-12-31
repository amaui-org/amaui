import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxFilled'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm104 400 160-80 160 80v-320H320v320Z"/>
    </Icon>
  );
});

IconMaterialBoxFilled.displayName = 'AmauiIconMaterialBoxFilled';

export default IconMaterialBoxFilled;
